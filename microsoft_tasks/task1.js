function solution(str) {
  let rezStr = '';
  str.replace(/(.)\1*/g, (m, c) => m.length > 2 ? rezStr += c + c : rezStr += m);

  return rezStr;
}

console.log(solution('eedaaad')); // eedaad
console.log(solution('xxxtxxx')); // xxtxx
console.log(solution('uuuuxaaaaxuuu')); // uuxaaxuu
