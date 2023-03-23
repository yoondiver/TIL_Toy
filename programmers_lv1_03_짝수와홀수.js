/**
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 */

function solution(num) {
  if (num % 2 === 0) {
    //num을 2로 나눈 나머지가 0 이면
    return (answer = "Even"); // 짝수
  } else {
    // 그렇지 않으면
    return (answer = "Odd"); // 홀수
  }
  return answer;
}

/**
 * 
 * function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even"
}
 */
