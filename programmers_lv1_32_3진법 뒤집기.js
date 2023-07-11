/**
 * 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}

/**
 * function solution(n) {
  return n
    .toString(3)
    .split("")
    .reduce((acc, cur, i) => acc + cur * 3 ** i, 0);
}
 */

/*
function solution(n) {
  return n
    .toString(3)
    .split("")
    .reduce((acc, cur, i) => acc + cur * 3 * i, 0);
}
*/

/*
function solution(n) {
  const result = [];

  while (n !== 0) {
    result.unshift(n % 3);
    n = Math.floor(n / 3);
  }

  return result.reduce((acc, cur, i) => acc + cur * 3 ** i, 0);
}
*/

/*
function solution(n) {
  n = n.toString(3);
  let answer = "";

  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  return parseInt(answer, 3);
}
*/
