
function sum2(n) {
  function do_sum(current, accu) {
    if (current === 0) {
      return accu;
    }
    return do_sum(current-1, accu + current);
  }
  return do_sum(n, 0);
}

console.log(sum2(10));


// call stack:
//
// do_sum(10, 0)
// do_sum(9, 10)
// do_sum(8, 19)
// do_sum(7, 27)
// do_sum(6, 34)
// do_sum(5, 40)
// do_sum(4, 45)
// do_sum(3, 49)
// do_sum(2, 52)
// do_sum(1, 54)
// do_sum(0, 55)
// 55


// console.log(sum2(100000));
