
[![fortran](http://i.imgur.com/P2ExtzQ.png)](#)

# fortran

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/fortran.svg)](https://www.npmjs.com/package/fortran) [![Downloads](https://img.shields.io/npm/dt/fortran.svg)](https://www.npmjs.com/package/fortran) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Fortran bridge for Node.js which allows you to run Fortran code from Node.js.

[![fortran](http://i.imgur.com/f6QlDFx.png)](#)

## :cloud: Installation

```sh
$ npm i --save fortran
```


### Prerequisites
You have to install the Fortran compiler:
```sh
# Ubuntu
sudo apt-get install gfortran
sudo apt-get install fort77

# OS X
brew install gcc
```

## :clipboard: Example



```js
const fotran = require("fortran");

// Let's run some Fortran stuff
fotran(`
      program hello
          print *, "Hello World!"
      end program hello
`, (err, data) => {
    console.log(err || data);
    // => Hello World
});
```

## :memo: Documentation


### `fortran(input, callback)`
Runs Fortran code from the Node.js side.

#### Params
- **String|Path** `input`: The Fortran code to execute, or a path to a Fortran file (generally having the `.f` extension).
- **Function** `callback`: The callback function called with `err`, `stdout` and `stderr`.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :sparkles: Related

 - [`node.fortran`](https://github.com/IonicaBizau/node.fortran#readme)—Execute Node.js from Fortran.
 - [`cobol`](https://github.com/IonicaBizau/node-cobol)—COBOL bridge for NodeJS which allows you to run COBOL code from NodeJS.
 - [`node.cobol`](https://github.com/IonicaBizau/node.cobol#readme)—Node.js bridge for COBOL which allows you to run Node.js code from COBOL.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
