"use strict";
const path = require("path");
let debug = require("debug")(path.basename(__filename, ".js"));


debug("eifile-cli");
let assert = require("assert");
let eifile = require("./eifile");

const fileName = "./testdata/test1.dat";


(async () => {
    try {
        const dataDef = require("./standards/PM304-3.2.js");
        const data = await eifile.loadFile(fileName, dataDef);

        eifile.writeFile(data, dataDef, "/tmp/piet.dat");

        eifile.writeDataAsJson(data, "/tmp/piet.json");
    } catch (e) {
        console.log(e)
    }
})();

