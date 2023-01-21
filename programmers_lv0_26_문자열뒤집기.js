// 문자열 뒤집기

/**
 * 문자열 my_string이 매개변수로 주어집니다.
 * my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(my_string) {
  // 문자열을 배열로 나누기 str.split()
  let answer = my_string.split("");

  // 배열 뒤집기 arr.reverse()
  answer = answer.reverse();

  // 배열을 문자열로 합치기 arr.join()
  // 여기서 매개변수(구분자)를 생략할 경우, 모든 배열이 쉼표로 구분되어 합쳐지므로 빈 문자열로 지정해주기
  answer = answer.join("");
  return answer;
}
