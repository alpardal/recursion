import {isFunction} from './lib/utils';

function sumThunked(n) {
  function do_sum(current, accu) {
    if (current === 0) {
      return accu;
    }
    return () => do_sum(current - 1, accu + current);
  }
  return do_sum.bind(null, n, 0);
}

function trampoline(f) {
  return function() {
    var r = f.apply(null, arguments);
    while (isFunction(r)) {
      r = r();
    }
    return r;
  }
}

const sum3 = trampoline(sumThunked);

console.log(sum3(10));

// console.log(sum3(100000));
