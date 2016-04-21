
export function mapping(f, reducer) {
  return function(accu, e) {
    return reducer(accu, f(e));
  }
}

export function filtering(pred, reducer) {
  return function(accu, e) {
    return pred(e) ? reducer(accu, e) : accu;
  }
}

export function taking(n, reducer) {
  var count = 0;
  return function(accu, e) {
    if (count === n) {
      return accu;
    }
    count++;
    return reducer(accu, e);
  }
}

export function dropping(n, reducer) {
  var count = 0;
  return function(accu, e) {
    if (count == n) {
      return reducer(accu, e);
    }
    count++;
    return accu;
  }
}
