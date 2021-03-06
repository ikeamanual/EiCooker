"use strict";
const path = require("path");
let debug = require("debug")(path.basename(__filename, ".js"));

/*
 * EI = externe integratie bestanden
 * https://www.vektis.nl/standaardisatie
 *
 */

debug("eifile");

const specs = {
  "PM304-3.2": require("./standards/PM304-3.2.js"),
  "PM305-3.2": require("./standards/PM305-3.2.js")
};

exports.initialize = async spec => {
  if (specs[spec]) {
    return specs[spec];
  } else {
    // throw new Error(`Could nog find specification "${spec}"`);
    throw new Error(`${spec}`);
  }
};
exports.load = async (filePath, dataDef) => {
  debug(`load ${filePath}`);

  const util = require("util");
  const fs = require("fs");
  const readFile = util.promisify(fs.readFile);
  const data = await readFile(filePath, "utf-8");

  debug(`${data.length}`);
  const lineLength = dataDef["fullWidth"];
  const re = new RegExp(`.{1,${lineLength}}`, "g");
  const lines = data.match(re);
  return lines;
};

exports.parseRecord = (data, dataDef, kenmerkRecord) => {
  debug(`parseRecord`);
  const fixy = require("fixy");

  var fixyData = fixy.parse(
    {
      map: dataDef[kenmerkRecord],
      options: {
        fullwidth: dataDef["fullWidth"]
      }
    },
    data
  );
  return fixyData;
};

exports.loadFile = async (filePath, dataDef) => {
  debug(`loadFile`);
  var data = [];

  const lines = await exports.load(filePath, dataDef);
  for (var i = 0; i < lines.length; i++) {
    var fixyData = exports.parseRecord(lines[i], dataDef, "01"); // just always parse with "Voorlooprecord" first
    const kenmerkRecord = fixyData[0]["Kenmerk record"];
    debug(`fixyData[0].Kenmerk record = ${kenmerkRecord}`);

    fixyData = exports.parseRecord(lines[i], dataDef, kenmerkRecord); //
    data.push([fixyData[0]]);
  }
  debug(`data.length = ${data.length}`);
  return data;
};

exports.writeFile = async (data, dataDef, filePath) => {
  debug(`writeFile`);
  const fixy = require("fixy");
  var outputString = "";
  for (var i = 0; i < data.length; i++) {
    const kenmerkRecord = data[i][0]["Kenmerk record"];
    debug(`fixyData[0].Kenmerk record = ${kenmerkRecord}`);
    var line = fixy.unparse(dataDef[kenmerkRecord], data[i]);
    line += "\r\n";
    outputString += line;
  }
  const util = require("util");
  const fs = require("fs");
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(filePath, outputString);
  debug(`data.length = ${data.length}`);
};

exports.writeDataAsJson = async (data, filePath) => {
  debug(`writeDataAsJson`);

  const outputString = JSON.stringify(data, null, 2);

  const util = require("util");
  const fs = require("fs");
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(filePath, outputString);
};
