"use strict";
let main = async () => {
    const path = require("path");
    let debug = require("debug")(path.basename(__filename, ".js"));

    debug("eifile-to-pdf");
    let assert = require("assert");
    let eifile = require("./eifile");

    // const fileName = "./testdata/test1.dat";
    const fileName = "./testdata/VECOZO Declaration No. 49 for Logopedie Sterk - 201902050432.dat"
    console.log(`fileName = ${fileName}`)


    const dataDef = require("./standards/PM304-3.2.js");


    const data = await eifile.loadFile(fileName, dataDef);
    debug(`data[0] = ${data[0]["Naam verzekerde (01)"]}`);

    var reportData = {
        "header": {
            "Dagtekening factuur": data[0]["Dagtekening factuur"],
            "Factuurnummer declarant": data[0]["Factuurnummer declarant"],
            "Uzovi-nummer": data[0]["Uzovi-nummer"]
        },
        "lines": []
    }
    for (let i = 1; i < data.length; i++) {
        if (data[i]["Kenmerk record"] === "99") {
            break;
        } else if (data[i]["Kenmerk record"] === "02") {
            reportData.lines.push({
                "Voorletters verzekerde": data[i]["Voorletters verzekerde"],
                "Naam verzekerde (01)": data[i]["Naam verzekerde (01)"],
                "Datum prestatie": []
            })

        } else if (data[i]["Kenmerk record"] === "04") {
            reportData.lines[reportData.lines.length - 1]["Datum prestatie"].push(data[i]["Datum prestatie"])
        } else {
            throw new Error(`Unkown Kenmerk record { data[i]["Kenmerk record"] }`)
        }
    }

    // await eifile.writeDataAsJson(data, "/tmp/piet.json");
    // var jsonData = require("/tmp/piet.json")
    var nunjucks = require("nunjucks")
    var html = nunjucks.render("invoice.njk", reportData)
    console.log(`html = ${html}`)
}
main()