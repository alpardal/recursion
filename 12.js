import {fold} from './lib/utils';

function concat(accu, e) {
  return accu.concat([e]);
}

function and(accu, e) {
  return accu && e;
}

function or(accu, e) {
  return accu || e;
}

console.log(fold(concat, [], [1,2,3]));
console.log(fold(or, false, [false, true, false]));
console.log(fold(and, true, [true, true, false]));
