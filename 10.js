import {fold, isEven} from './lib/utils';

function any(pred, lst) {
  return fold((accu, v) => pred(v) || accu,
              false,
              lst);
}

console.log(any(isEven, [1,2,3,4]));
console.log(any(isEven, [1,3,5,7]));
