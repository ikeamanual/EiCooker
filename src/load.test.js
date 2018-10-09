"use strict";
const path = require("path");
let debug = require("debug")(path.basename(__filename, ".js"));

debug("load.test");
let assert = require("assert");
let load = require("./load");

describe("load file", async function() {
  it("file should load", async function() {
    const lines = await load.load(
      "../EiCooker-data/data/VECOZO Declaration No. 43 for Logopedie Sterk - 201810040829.dat"
    );

    assert.equal(lines.length, 28);
  });

  it("parse Voorlooprecord", async function() {
    const lines = await load.load(
      "../EiCooker-data/data/VECOZO Declaration No. 43 for Logopedie Sterk - 201810040829.dat"
    );
    debug(`lines[0] = ${lines[0].substring(0, 2)}`);
    const std = require("./standards/PM304-3.2.js");
    const fixyData = load.parseRecord(lines[0], std, "Voorlooprecord");

    debug(`fixyData[0].Kenmerk record = ${fixyData[0]["Kenmerk record"]}`);

    assert.equal(fixyData[0].Praktijkcode, "05098615");
  });

  // const fileName =
  //   "../EiCooker-data/data/VECOZO Declaration No. 43 for Logopedie Sterk - 201810040829.dat";
  const fileName =
    "../EiCooker-data/data/VECOZO Declaration No. 28 for Logopedie Sterk - 201810090958.dat";

  it.only("parse all Kenmerk records", async function() {
    const lines = await load.load(fileName);
    const std = require("./standards/PM304-3.2.js");
    for (var i = 0; i < lines.length; i++) {
      var fixyData = load.parseRecord(lines[i], std, "Voorlooprecord");
      const kenmerkRec = fixyData[0]["Kenmerk record"];
      debug(`fixyData[0].Kenmerk record = ${kenmerkRec}`);
      if ("02" === kenmerkRec) {
        fixyData = load.parseRecord(lines[i], std, "Verzekerdenrecord");
        debug(
          `fixyData[0].Identificatie detailrecord = ${
            fixyData[0]["Identificatie detailrecord"]
          }`
        );
      }
      if ("04" === kenmerkRec) {
        fixyData = load.parseRecord(lines[i], std, "Prestatierecord");
        debug(
          `fixyData[0].Identificatie detailrecord = ${
            fixyData[0]["Identificatie detailrecord"]
          }`
        );
      }
      if ("98" === kenmerkRec) {
        fixyData = load.parseRecord(lines[i], std, "Commentaarrecord");
        debug(
          `fixyData[0].Identificatie detailrecord = ${
            fixyData[0]["Identificatie detailrecord"]
          }`
        );
      }
      if ("99" === kenmerkRec) {
        fixyData = load.parseRecord(lines[i], std, "Sluitrecord");
        debug(
          `fixyData[0].Aantal prestatierecords = ${
            fixyData[0]["Aantal prestatierecords"]
          }`
        );
        debug(
          `fixyData[0].Totaal aantal detailrecords = ${
            fixyData[0]["Totaal aantal detailrecords"]
          }`
        );
      }
    }
    // assert.equal(fixy.Age, "01");
  });
});
