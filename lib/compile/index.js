"use strict";

const prgmInstalled = require("prgm-installed")
    , spawn = require("spawno")
    , OArgv = require("oargv")
    , Path = require("path")
    ;

function checkBin(callback) {
    prgmInstalled("fort77",  callback);
}

function Compile(input, callback) {
    checkBin(exists => {
        if (!exists) {
            return callback(new Error("Couldn't find the Fortran compiler executable in the PATH."));
        }

        let output = Path.resolve(Path.basename(input).slice(0, -2))
          , args = {
                _: input,
                o: output
            }
          ;

        spawn("fort77", OArgv(args), (err, stdout, stderr) => {
            if (/^Cannot open/.test(stderr)) {
                err = new Error(stderr);
                stderr = "";
            }
            if (err) {
                return callback(stderr || err);
            }

            callback(null, output);
        });
    });
}

module.exports = Compile;
