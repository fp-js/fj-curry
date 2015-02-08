var slice = Array.prototype.slice;

let _curry = (n, fn, curryArgs = []) => {
  return (...args) => {
    var concatArgs = curryArgs.concat(args);

    if (n > concatArgs.length) {
      return _curry(n, fn, concatArgs);
    } else {
      return fn.apply(null, slice.call(concatArgs, 0, n));
    }
  };
};

export function curry(fn) {
  return _curry(fn.length, fn);
}

export function curryN(n, fn) {
  return _curry(n, fn);
}

export var curry1 = curryN(2, curryN)(1);
export var curry2 = curryN(2, curryN)(2);
export var curry3 = curryN(2, curryN)(3);
export var curry4 = curryN(2, curryN)(4);
