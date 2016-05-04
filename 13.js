import {concat, fold, inc, isEven} from './lib/utils';

// transducers:
//
//   reducer => newReducer
//

function mapping(f, reducer) {
  return function(accu, e) {
    return reducer(accu, f(e));
  }
}

function filtering(pred, reducer) {
  return function(accu, e) {
    return pred(e) ? reducer(accu, e) : accu;
  }
}

function taking(n, reducer) {
  var count = 0;
  return function(accu, e) {
    if (count === n) {
      return accu;
    }
    count++;
    return reducer(accu, e);
  }
}

function dropping(n, reducer) {
  var count = 0;
  return function(accu, e) {
    if (count === n) {
      return reducer(accu, e);
    }
    count++;
    return accu;
  }
}

const lst = [1,2,3,4,5,6];

console.log('Original list: ' + lst);

console.log(fold(mapping(inc, concat),
                 [], lst));
// console.log(fold(mapping(inc, filtering(isEven, concat)),
//                  [], lst));
// console.log(fold(filtering(isEven, mapping(inc, taking(1, concat))),
//                  [], lst));
// console.log(fold(dropping(2, mapping(inc, filtering(isEven, concat))),
//                  [], lst));
