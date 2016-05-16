"use strict";

const fotran = require("../lib");

// Let's run some Fortran stuff
fotran(`
      program hello
          print *, "Hello World!"
      end program hello
`, (err, data) => {
    console.log(err || data);
    // => Hello World
});
