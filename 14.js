import {fold, concat, isEven, inc, partial} from './lib/utils';
import {dropping, mapping, filtering} from './lib/transducers';

function applyTo(accu, e) {
  return e(accu);
}

const lst = [1,2,3,4,5,6],
      transducers = [partial(filtering, isEven),
                     partial(mapping, inc),
                     partial(dropping, 2)];

// "it's turtles all the way down":
console.log(fold(fold(applyTo, concat, transducers),
                 [], lst));


function compose() { // *
  const fs = [].slice.call(arguments, 0);
  return function(seed) {
    return fold(applyTo, seed, fs);
  }
}

// mesma coisa:
// console.log(fold(compose(...transducers)(concat),
//                  [], lst));


// *: `compose` como escrita acima aplica as
//     funções na ordem inversa do esperado:
//
//       `compose(f, g)(x)` = `g(f(x))` e não `f(g(x))`
