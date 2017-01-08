"use strict";

const _curry = (arity, fn, curryArgs = []) => {
  return (...arg) => {
    var concatArgs = [...curryArgs, ...arg];
    // If current function arity greater than number of received args
    if (arity > concatArgs.length) {
      return _curry(arity, fn, concatArgs);
    } else {
      return fn(...concatArgs);
    }
  };
};

export const curry = (fn) => _curry(fn.length, fn);

export const curryN = (n, fn) => _curry(n, fn);

export const curry1 = curryN(2, curryN)(1);
export const curry2 = curryN(2, curryN)(2);
export const curry3 = curryN(2, curryN)(3);
export const curry4 = curryN(2, curryN)(4);
