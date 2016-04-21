import {isEmpty, head, tail, concat} from './lib/utils';

function map(f, lst, accu=[]) {
  if (isEmpty(lst)) {
    return accu;
  }
  return map(f, tail(lst), concat(accu, f(head(lst))));
}

console.log(map(x => 2*x, [1,2,3]))
