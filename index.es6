export function curry1(fn) {
  return (arg1) => {
    return fn.call(null, arg1);
  };
}

export function curry2(fn) {
  return (arg1) => {
    return (arg2) => {
      return fn.call(null, arg1, arg2);
    };
  };
}

export function curry3(fn) {
  return (arg1) => {
    return (arg2) => {
      return (arg3) => {
        return fn.call(null, arg1, arg2, arg3);
      };
    };
  };
}

export function curry4(fn) {
  return (arg1) => {
    return (arg2) => {
      return (arg3) => {
        return (arg4) => {
          return fn.call(null, arg1, arg2, arg3, arg4);
        };
      };
    };
  };
}
