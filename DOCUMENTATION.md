## Documentation

You can see below the API reference of this module.

### `fortran(input, callback)`
Runs Fortran code from the Node.js side.

#### Params
- **String|Path** `input`: The Fortran code to execute, or a path to a Fortran file (generally having the `.f` extension).
- **Function** `callback`: The callback function called with `err`, `stdout` and `stderr`.

