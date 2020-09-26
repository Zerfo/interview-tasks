/**
 * Дана строка, состоящая из букв A-Z:
 * AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBbbb
 * Нужно написать функцию RLE, которая на выходе даст строку вида:
 * A4B3C2XYZD4E3F3A6B28b3
 */

const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBbbb';

function rle(str) {
  return str.replace(/(.)\1*/g, (m, c) => c + (m.length > 1 ? m.length : ''));
}

console.log(rle(str));
