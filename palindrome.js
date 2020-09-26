/**
 * Необходимо реализовать функцию
 * проверки строки на палиндром
 */

function palindrome(str) {
  str = str.toLowerCase();
  const lastIndex = str.length - 1;

  for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[lastIndex - i]) {
          return false;
      }
  }

  return true;
}

console.log(palindrome('49094'));
console.log(palindrome('Hello world'));
