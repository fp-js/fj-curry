"use strict";

exports.curry1 = curry1;
exports.curry2 = curry2;
exports.curry3 = curry3;
exports.curry4 = curry4;
function curry1(fn) {
  return function (arg1) {
    return fn.call(null, arg1);
  };
}

function curry2(fn) {
  return function (arg1) {
    return function (arg2) {
      return fn.call(null, arg1, arg2);
    };
  };
}

function curry3(fn) {
  return function (arg1) {
    return function (arg2) {
      return function (arg3) {
        return fn.call(null, arg1, arg2, arg3);
      };
    };
  };
}

function curry4(fn) {
  return function (arg1) {
    return function (arg2) {
      return function (arg3) {
        return function (arg4) {
          return fn.call(null, arg1, arg2, arg3, arg4);
        };
      };
    };
  };
}
exports.__esModule = true;