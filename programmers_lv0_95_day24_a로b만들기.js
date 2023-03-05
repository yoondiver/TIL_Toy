/** 문자열 before와 after가 매개변수로 주어질 때,
 * before의 순서를 바꾸어 after를 만들 수 있으면 1을,
 * 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 *
 */

function solution(before, after) {
  let answer = [...before].map((x) => (after = after.replace(x, "")));
  return answer[answer.length - 1] === "" ? 1 : 0;
}

/*
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}
*/
