import {isEmpty, head, tail} from './lib/utils';

// `fold`, aka `reduce`, aka `inject`, aka `foldl`:

function fold(f, accu, lst) {
  if (isEmpty(lst)) {
    return accu;
  }
  return fold(f,
              f(accu, head(lst)),
              tail(lst));
}

const listSum = fold.bind(null, (a, b) => a+b, 0);

console.log(listSum([1,2,3]));

//  "A tutorial on the universality and expressiveness of fold",
//    Graham Hutton @ www.cs.nott.ac.uk/~pszgmh/fold.pdf
