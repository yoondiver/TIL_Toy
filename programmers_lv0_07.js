// 숫자 비교하기
/**
 * 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
 */

function solution(num, total) {
  0 <= num <= 10000;
  0 <= total <= 10000;
  let answer = 0;

  if (num === total) {
    answer = 1;
  } else {
    answer = -1;
  }
  return answer;
}
