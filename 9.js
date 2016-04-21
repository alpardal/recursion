import {fold, isEven} from './lib/utils';

function all(pred, lst) {
  return fold((accu, v) => pred(v) && accu,
              true,
              lst);
}

console.log(all(isEven, [1,2,3,4]));
console.log(all(isEven, [2,4,6,8]));
