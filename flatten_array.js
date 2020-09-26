/**
 * Необходимо "развернуть" двумерный массив в одномерны
 * Пример:
 * [1, [2, 3], [4, 5, 6]] -> [1, 2, 3, 4, 5, 6]
 * [1, [2, 3], [4, 5, 6], [7, [8, 9]]] -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const arr2 = [1, [2, 3], [4, 5, 6]];
const arr3 = [1, [2, 3], [4, 5, 6], [7, [8, 9]]];

function flattenDeep(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

console.log('Глубина 2');
console.log(flattenDeep(arr2));
console.log('<----------------------------------------->');
console.log(arr2.flat());
console.log('<----------------------------------------->');
console.log('Глубина 3');
console.log(arr3.flat(2));
console.log('<----------------------------------------->');
console.log(flattenDeep(arr3));
