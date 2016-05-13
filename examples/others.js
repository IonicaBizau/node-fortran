const fortran = require("../lib")
    , abs = require("abs")
    ;

const input = process.argv[2];
if (!input) {
    return console.log("Usage: node others.js file.f");
}

fortran(abs(input), (err, data) => {
    console.log(err || data);
});
