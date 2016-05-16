"use strict";

const fotran = require("../lib");

fotran(`
      program hello
          print *, "Hello World!"
      end program hello
`, (err, data) => {
    console.log(err || data);
});
