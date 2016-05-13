













![cobol](http://i.imgur.com/DutRzDr.png)




# cobol

COBOL bridge for NodeJS which allows you to run COBOL code from NodeJS.




## Installation

```sh
$ npm i cobol
```









## Example






```js
"use strict";

const fotran = require("cobol");

// Execute some COBOL snippets
fotran(`
      program hello
          print *, "Hello World!"
      end program hello
`, (err, data) => {
    console.log(err || data);
});

```






## Documentation





### `fortran(input, callback)`
Runs Fortran code from Node.JS side.

#### Params
- **String|Path** `input`: The Fortran code to execute, or a path to a Fortran file (generally having the `.f` extension).
- **Function** `callback`: The callback function called with `err`, `stdout` and `stderr`.






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
