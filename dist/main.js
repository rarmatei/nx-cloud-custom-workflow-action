var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function isNumber(num) {
      var number = +num;
      if (number - number !== 0) {
        return false;
      }
      if (number === num) {
        return true;
      }
      if (typeof num === "string") {
        if (number === 0 && num.trim() === "") {
          return false;
        }
        return true;
      }
      return false;
    };
  }
});

// node_modules/is-odd/index.js
var require_is_odd = __commonJS({
  "node_modules/is-odd/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    module2.exports = function isOdd2(value) {
      const n = Math.abs(value);
      if (!isNumber(n)) {
        throw new TypeError("expected a number");
      }
      if (!Number.isInteger(n)) {
        throw new Error("expected an integer");
      }
      if (!Number.isSafeInteger(n)) {
        throw new Error("value exceeds maximum safe integer");
      }
      return n % 2 === 1;
    };
  }
});

// node-src/main.ts
var import_child_process = require("child_process");
var import_is_odd = __toESM(require_is_odd());
console.log(`is 5 odd: ${(0, import_is_odd.default)(5)}`);
var result = (0, import_child_process.execSync)(`echo "from inside the node module"`).toString();
console.log({ result });
console.log("Inputs results: ");
console.log({
  arg1: process.env["ARG_1"],
  arg2: process.env["ARG_2"]
});
/*! Bundled license information:

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-odd/index.js:
  (*!
   * is-odd <https://github.com/jonschlinkert/is-odd>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
