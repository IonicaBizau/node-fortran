"use strict";

const prgmInstalled = require("prgm-installed")
    , spawn = require("spawno")
    , OArgv = require("oargv")
    , Path = require("path")
    ;

function getExe(cb) {
    prgmInstalled("fort77",  installed => {
        if (installed) { return cb(null, "fort77"); }
        prgmInstalled("gfortran",  installed => {
            if (installed) { return cb(null, "gfortran"); }
            callback(new Error("Couldn't find the Fortran compiler executable in the PATH. Please install fort77 or gfortran."));
        });
    });
}

function checkBin(callback) {
    prgmInstalled("fort77",  callback);
}

function Compile(input, callback) {
    getExe((err, exe) => {
        if (err) { return callback(err); }

        let output = Path.resolve(Path.basename(input).slice(0, -2))
          , args = {
                _: input,
                o: output
            }
          ;

        spawn(exe, OArgv(args), (err, stdout, stderr) => {

            if (/^Cannot open/.test(stderr)) {
                err = new Error(stderr);
                stderr = "";
            }

            if (stderr || err) {
                return callback(stderr || err);
            }

            callback(null, output);
        });
    });
}

module.exports = Compile;
