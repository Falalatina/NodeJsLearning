// Modules
//commonJS - every file is a module

const names = require("./4-names");
const sayHi = require("./5-utils");

const { john, peter } = names;

sayHi("susan");
sayHi(john);
sayHi(peter);
