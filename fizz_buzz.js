/**
 * Дан массив чисел от 1 до 100
 * Необходимо вывести на экран слово Fizz, если число делить на 3;
 * Если число делиться на 5, вывести Buzz;
 * Если оно днлится и на 3 и на 5, вывести FizzBuzz
 */

const arr = [...Array(99).keys()].map(i => i + 1);

function fizzBuzz(arr) {
  arr.forEach(num => {
    if(num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else if(num % 3 === 0) {
      console.log('Fizz');
    } else if(num % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  });
}

function fizzBuzz2(arr) {
  const gen = (n ,w) => (num) => num % n === 0 ? w : '';
  const fizz = gen(3, 'Fizz');
  const buzz = gen(5, 'Buzz');

  arr.forEach(num => console.log(fizz(num) + buzz(num) || num));
}

console.log('FizzBuzz 1');
fizzBuzz(arr);
console.log('<----------------------------------------->');
console.log('FizzBuzz 2');
console.log('<----------------------------------------->');
fizzBuzz2(arr);
