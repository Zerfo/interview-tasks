/**
 * Необходимо написать функцию суммирования,
 * которая выводит в консоль результат вычислений
 * следующим образом:
 * sum(1) // 1
 * sum(1)(2)(3) // 1, 3, 6
 * и т.д.
 */

function sum1(num) {
  let rez = num;

  function f(n) {
    rez += n;
    console.log(rez);
    return f;
  }

  console.log(rez);

  return f;
}

function sum2(num) {
  console.log(num);
  return (n) => sum2(num + n);
}

console.log('sum 1');
sum1(1)(2)(3);
console.log('<----------------------------------------->');
console.log('sum 2');
console.log('<----------------------------------------->');
sum2(1)(2)(3);
