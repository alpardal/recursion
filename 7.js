import {fold, concat} from './lib/utils';

function map(f, lst) {
  return fold((accu, v) => concat(accu, f(v)),
              [],
              lst);
}

const inc = x => x+1;

console.log(map(inc, [1,2,3]));
