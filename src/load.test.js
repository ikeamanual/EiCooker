"use strict";
const path = require("path");
let debug = require("debug")(path.basename(__filename, ".js"));

debug("load.test");
let assert = require("assert");
let load = require("./load");

describe("load file", async function() {
  it("file should load", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const lines = await load.load(
      "../EiCooker-data/data/VECOZO Declaration No. 43 for Logopedie Sterk - 201810040829.dat",
      dataDef
    );

    assert.equal(lines.length, 28);
  });

  it("parse Voorlooprecord", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const lines = await load.load(
      "../EiCooker-data/data/VECOZO Declaration No. 43 for Logopedie Sterk - 201810040829.dat",
      dataDef
    );
    debug(`lines[0] = ${lines[0].substring(0, 2)}`);

    const fixyData = load.parseRecord(lines[0], dataDef, "Voorlooprecord");

    debug(`fixyData[0].Kenmerk record = ${fixyData[0]["Kenmerk record"]}`);

    assert.equal(fixyData[0].Praktijkcode, "05098615");
  });

  const fileName =
    "../EiCooker-data/data/VECOZO Declaration No. 43 for Logopedie Sterk - 201810040829.dat";
  // const fileName =
  // "../EiCooker-data/data/VECOZO Declaration No. 28 for Logopedie Sterk - 201810090958.dat";

  it("load and write a complete file into mem, json format", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const data = await load.loadFile(fileName, dataDef);
    // assert.equal(data.length, 49);
    debug(`data[0] = ${data[1][0]["Naam verzekerde (01)"]}`);

    load.writeFile(data, dataDef, "/tmp/piet.dat");
  });
});
