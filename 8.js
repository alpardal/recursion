import {fold, concat} from './lib/utils';

function filter(pred, lst) {
  return fold((accu, v) => (pred(v) ? concat(accu, v) : accu),
              [],
              lst);
}

const isEven = (n) => (n % 2) === 0;

console.log(filter(isEven, [1,2,3,4]));
