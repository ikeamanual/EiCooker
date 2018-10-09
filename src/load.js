"use strict";
const path = require("path");
let debug = require("debug")(path.basename(__filename, ".js"));

debug("load");

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

exports.parseRecord = (data, dataDef, standardName) => {
  debug(`parseRecord`);
  const fixy = require("fixy");

  var fixyData = fixy.parse(
    {
      map: dataDef[standardName],
      options: {
        fullwidth: dataDef["fullWidth"]
      }
    },
    data
  );
  return fixyData;
};

const kenmerkToRecordName = {
  "01": "Voorlooprecord",
  "02": "Verzekerdenrecord",
  "04": "Prestatierecord",
  "98": "Commentaarrecord",
  "99": "Sluitrecord"
};

exports.loadFile = async (filePath, dataDef) => {
  debug(`loadFile`);
  var data = [];

  const lines = await exports.load(filePath, dataDef);
  for (var i = 0; i < lines.length; i++) {
    var fixyData = exports.parseRecord(lines[i], dataDef, "Voorlooprecord");
    const kenmerkRecord = fixyData[0]["Kenmerk record"];
    const recordName = kenmerkToRecordName[kenmerkRecord];
    debug(
      `fixyData[0].Kenmerk record = ${kenmerkRecord}, recordName = ${recordName}`
    );

    fixyData = exports.parseRecord(lines[i], dataDef, recordName);
    data.push(fixyData);
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
    // if (kenmerkRecord === "01") {
    const recordName = kenmerkToRecordName[kenmerkRecord];
    debug(
      `fixyData[0].Kenmerk record = ${kenmerkRecord}, recordName = ${recordName}`
    );
    var line = fixy.unparse(dataDef[recordName], data[i]);
    line += "\n";
    outputString += line;
    // }
  }
  const util = require("util");
  const fs = require("fs");
  const writeFile = util.promisify(fs.writeFile);
  writeFile(filePath, outputString);
  debug(`data.length = ${data.length}`);
};
