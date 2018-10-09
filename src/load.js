"use strict";
const path = require("path");
let debug = require("debug")(path.basename(__filename, ".js"));

debug("load");

const stream = require("stream");
function readLines({ input }) {
  const output = new stream.PassThrough({ objectMode: true });
  const rl = readline.createInterface({ input });
  rl.on("line", line => {
    output.write(line);
  });
  rl.on("close", () => {
    output.push(null);
  });
  return output;
}

exports.load = async filePath => {
  debug(`load ${filePath}`);

  const util = require("util");
  const fs = require("fs");
  const readFile = util.promisify(fs.readFile);

  const data = await readFile(filePath, "utf-8");

  debug(`${data.length}`);
  const mod = data.length % 310;
  const remainder = data.length / 310;
  const lines = data.match(/.{1,310}/g);
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
