import {isEmpty, tail} from './lib/utils';

function length(lst, accu=0) {
  if (isEmpty(lst)) {
    return accu;
  }
  return length(tail(lst), accu+1);
}

console.log(length([1,2,3,4,5]));
