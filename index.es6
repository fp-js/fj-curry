let _curry = (fn, curryArgs = []) => {
  return (...args) => {
    var concatArgs = [...concatArgs, ...args];

    // If function arity greater than number of received args
    if (fn.length > concatArgs.length) {
      return _curry(fn, concatArgs);
    } else {
      return fn(...concatArgs);
    }
  };
};

export function curry(fn) {
  return _curry(fn);
}

// curryN now unnecessary
export function curryN(n, fn) {
  return _curry(n, fn);
}

export var curry1 = curryN(2, curryN)(1);
export var curry2 = curryN(2, curryN)(2);
export var curry3 = curryN(2, curryN)(3);
export var curry4 = curryN(2, curryN)(4);
