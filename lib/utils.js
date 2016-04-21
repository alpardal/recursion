
export function isEmpty(list) {
  return list.length === 0;
}

export function head(list) {
  return list[0];
}

export function tail(list) {
  return list.slice(1, list.length);
}

export function isFunction(thing) {
  return (typeof thing) === 'function';
}

export function concat(lst, e) {
  return lst.concat([e]);
}

export function fold(f, accu, lst) {
  if (isEmpty(lst)) {
    return accu;
  }
  return fold(f,
              f(accu, head(lst)),
              tail(lst));
}

export function inc(x) { return x+1; }

export function isEven(x) { return (x % 2) === 0; }

export function partial() {
  const args = [].slice.call(arguments, 0),
        f = args[0];
  return f.bind.apply(f, args);
}
