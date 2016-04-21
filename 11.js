import {concat, fold, inc, isEven, partial} from './lib/utils';

// reducer function:
//
//   (accu, e) => newAccu
//

function mapReducer(f) {
  return function(accu, e) {
    return concat(accu, f(e));
  }
}

function filterReducer(pred) {
  return function(accu, e) {
    return pred(e) ? concat(accu, e) :
                     accu;
  }
}

function allReducer(pred) {
  return function(accu, e) {
    return pred(e) && accu;
  }
}

function anyReducer(pred) {
  return function(accu, e) {
    return pred(e) || accu;
  }
}

const mapInc =     partial(fold, mapReducer(inc),       []),
      filterEven = partial(fold, filterReducer(isEven), []),
      allEven =    partial(fold, allReducer(isEven),    true),
      anyEven =    partial(fold, anyReducer(isEven),    false);

console.log(mapInc([1,2,3]));
// console.log(filterEven([1,2,3,4]));
// console.log(allEven([1,2,3,4]));
// console.log(anyEven([1,2,3,4]));
