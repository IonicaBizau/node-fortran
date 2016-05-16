"use strict";

const noop = require("noop6")
    , fs = require("fs")
    , spawn = require("spawno")
    , tmp = require("tmp")
    , compile = require("./compile")
    , ul = require("ul")
    , oneByOne = require("one-by-one")
    ;

/**
 * fortran
 * Runs Fortran code from the Node.js side.
 *
 * @name fortran
 * @function
 * @param {String|Path} input The Fortran code to execute, or a path to a Fortran file (generally having the `.f` extension).
 * @param {Function} callback The callback function called with `err`, `stdout` and `stderr`.
 */
function fortran(input, callback) {

    callback = callback || noop;

    // File
    if (typeof input === "string" && input.split("\n").length === 1) {
        return oneByOne([
            next => compile(input, next)
          , (next, path) => {
                spawn(path, (err, stdout, stderr) => {
                    next(err, !err && [stdout.slice(0, -1), stderr]);
                    fs.unlink(path, noop);
                });
            }
        ], (err, data, last) => callback.apply(this, [err, !err && last[0], !err && last[1]]));
    }

    // Code
    if (typeof input === "string") {
        return oneByOne([
            next => tmp.file({ postfix: ".f" }, (err, path) => next(err, path))
          , (next, path) => fs.writeFile(path, input, err => next(err, path))
          , (next, path) => {
                fortran(path, (err, stdout, stderr) =>
                    next(err, [stdout, stderr])
                );
            }
        ], (err, data, last) => callback.apply(this, [err, last[0], last[1]]));
    }

    callback(new Error("Incorrect usage."));
}

module.exports = fortran;
