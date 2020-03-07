"use strict";
const path = require("path");
let debug = require("debug")(path.basename(__filename, ".js"));

var chai = require("chai");
var chaiFiles = require("chai-files");
chai.use(chaiFiles);
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var expect = chai.expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;

debug("eifile.test");
let assert = require("assert");
let eifile = require("./eifile");

const fileName = "./testdata/test1.dat";

describe("load file", async function() {
  it("file should load 4 lines", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const lines = await eifile.load(fileName, dataDef);

    assert.equal(lines.length, 4);
  });

  it("unknown file should throw exception", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    let lines = [];
    try {
      lines = await eifile.load(fileName + "XXX", dataDef);
    } catch (e) {
      assert.equal(lines.length, 0);
    }
  });

  it("parse Voorlooprecord", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const lines = await eifile.load(fileName, dataDef);
    debug(`lines[0] = ${lines[0].substring(0, 2)}`);

    const fixyData = eifile.parseRecord(lines[0], dataDef, "01");

    debug(`fixyData[0].Kenmerk record = ${fixyData["Kenmerk record"]}`);

    assert.equal(fixyData[0].Praktijkcode, "01234567");
  });

  it("load and write a complete file", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const data = await eifile.loadFile(fileName, dataDef);
    // assert.equal(data.length, 49);
    debug(`data[0] = ${data[0]["Naam verzekerde (01)"]}`);

    await eifile.writeFile(data, dataDef, "/tmp/piet.dat");

    expect(file(fileName)).to.equal(file("/tmp/piet.dat"));
  });

  it("load dat file and write a json file", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const data = await eifile.loadFile(fileName, dataDef);
    // assert.equal(data.length, 49);
    debug(`data[0] = ${data[0]["Naam verzekerde (01)"]}`);

    await eifile.writeDataAsJson(data, "/tmp/piet.json");
  });
});

describe("write file", async function() {
  it("write data from json", async function() {
    const data = [
      [
        {
          "Kenmerk record": "01",
          "Code externe-integratiebericht": "107",
          "Versienummer berichtstandaard": "03",
          "Subversienummer berichtstandaard": "02",
          "Soort bericht": "P",
          "Code informatiesysteem softwareleverancier": "999801",
          "Versieaanduiding informatiesysteem softwareleverancier": "1.0.0",
          "Uzovi-nummer": "9664",
          "Code servicebureau": "00000000",
          Zorgverlenerscode: "01234567",
          Praktijkcode: "01234567",
          Instellingscode: "00000000",
          "Identificatiecode betaling aan": "03",
          "Begindatum declaratieperiode": "20180620",
          "Einddatum declaratieperiode": "20180930",
          "Factuurnummer declarant": "100",
          "Dagtekening factuur": "20181002",
          "Btw-identificatienummer": null,
          Valutacode: "EUR",
          Reserve: null
        }
      ],
      [
        {
          "Kenmerk record": "02",
          "Identificatie detailrecord": "000000000001",
          "Burgerservicenummer (bsn) verzekerde": "957136171",
          "Uzovi-nummer": "1234", // 9664
          "Verzekerdennummer (inschrijvingsnummer, relatienummer)":
            "0123456789",
          "Patient(identificatie)nummer": "128",
          "Datum geboorte verzekerde": "20000101",
          "Code geslacht verzekerde": "1",
          "Naamcode/naamgebruik (01)": "1",
          "Naam verzekerde (01)": "Piet",
          "Voorvoegsel verzekerde (01)": null,
          "Naamcode/naamgebruik (02)": "0",
          "Naam verzekerde (02)": null,
          "Voorvoegsel verzekerde (02)": null,
          "Voorletters verzekerde": "J",
          "Naamcode/naamgebruik (03)": "1",
          "Postcode (huisadres) verzekerde": "1234AB",
          "Postcode buitenland": null,
          "Huisnummer (huisadres) verzekerde": "00099",
          "Huisnummertoevoeging (huisadres) verzekerde": null,
          "Code land verzekerde": "NL",
          Debiteurnummer: "128",
          Reserve: null
        }
      ],
      [
        {
          "Kenmerk record": "04",
          "Identificatie detailrecord": "000000000002",
          "Burgerservicenummer (bsn) verzekerde": "957136171",
          "Uzovi-nummer": "1234",
          "Verzekerdennummer (inschrijvingsnummer, relatienummer)":
            "0123456789",
          Machtigingsnummer: null,
          "Doorsturen toegestaan": "1",
          "Datum prestatie": "20180912",
          "Aanduiding prestatiecodelijst": "012",
          Prestatiecode: "4000",
          "Aantal uitgevoerde prestaties": "0001",
          "Indicatie ongeval (ongevalsgevolg)": "O",
          "Aanduiding diagnosecodelijst (01)": "000",
          "Verwijsdiagnosecode paramedische hulp (01)": "00000000",
          "Aanduiding diagnosecodelijst (02)": "000",
          "Verwijsdiagnosecode paramedische hulp (02)": "00000000",
          "Aanduiding diagnosecodelijst (03)": "012",
          "Paramedische diagnosecode (01)": "5110",
          "Aanduiding diagnosecodelijst (04)": "000",
          "Paramedische diagnosecode (02)": null,
          "Code soort indicatie paramedische hulp": "000",
          "Zorgverlenerscode behandelaar/uitvoerder": "05193098",
          "Specialisme behandelaar/uitvoerder": "0000",
          Verwijsdatum: "00000000",
          "Zorgverlenerscode voorschrijver/verwijzer": "00000000",
          "Specialisme voorschrijver/verwijzer": "0000",
          "Reden einde zorg": "01",
          "Tarief prestatie (incl. btw)": "00004000",
          "Berekend bedrag (incl. btw)": "00004000",
          "Indicatie debet/credit (01)": "D",
          "Btw-percentage declaratiebedrag": "0000",
          "Declaratiebedrag (incl. btw)": "00004000",
          "Indicatie debet/credit (02)": "D",
          "Referentienummer dit prestatierecord": "752",
          "Referentienummer voorgaande gerelateerde prestatierecord": null,
          Reserve: null
        }
      ],
      [
        {
          "Kenmerk record": "99",
          "Aantal verzekerdenrecords": "000001",
          "Aantal debiteurrecords": "000000",
          "Aantal prestatierecords": "000001",
          "Aantal commentaarrecords": "000000",
          "Totaal aantal detailrecords": "0000002",
          "Totaal declaratiebedrag": "00000004000",
          "Indicatie debet/credit": "D",
          Reserve: null
        }
      ]
    ];

    const util = require("util");
    const fs = require("fs");
    const writeFile = util.promisify(fs.writeFile);
    await writeFile("/tmp/piet2.json", JSON.stringify(data, null, 2));

    const dataDef = require("./standards/PM304-3.2.js");
    debug(`data[0] = ${data[0][0]["Naam verzekerde (01)"]}`);

    await eifile.writeFile(data, dataDef, "/tmp/piet2.dat");

    expect(file(fileName)).to.equal(file("/tmp/piet2.dat"));

    const readFile = util.promisify(fs.readFile);
    var contents = await readFile("/tmp/piet2.json");
    var jsonContent = JSON.parse(contents);

    await eifile.writeFile(data, dataDef, "/tmp/piet3.dat");

    expect(file(fileName)).to.equal(file("/tmp/piet3.dat"));
  });
});

describe("load local specs", async function() {
  it("specs should load from within module", async function() {
    const dataDef = require("./standards/PM304-3.2.js");
    const dataDef2 = await eifile.initialize("PM304-3.2");

    expect(dataDef).to.deep.equal(dataDef2);
  });
  it("unknown specs should throw exception", async function() {
    // should throw error with text
    const spec = "xxxxxx";
    await expect(eifile.initialize(spec)).to.be.rejectedWith(`${spec}`);
  });
});
