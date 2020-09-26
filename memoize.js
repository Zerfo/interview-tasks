/**
 * Необходимо реализовать функцию мемоизации (кеширования)
 * для вычисления факториала
 */

function memoize(fn) {
  let cache = {};
  return (...args) => {
    let n = args[0];

    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

const factorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
);

console.log(factorial(5)); // вычислено
console.log(factorial(6)); // вычислено для 6, но для предыдущих значений взято из кэша
