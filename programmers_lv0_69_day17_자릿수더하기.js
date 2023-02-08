// 자릿수 더하기
/**
 * 정수 n이 매개변수로 주어질 때
 * n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
 */

function solution(n) {
  let answer = 0;
  let num = String(n);

  for (let i = 0; i < num.length; i++) {
    answer += Number(num[i]);
  }

  return answer;
}

/**
 * function solution(n) {
 *  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  }
 */

/**
   * function solution(n) {
    let result = 0;

    while (n > 0) {
        result += n % 10;

        n = Math.floor(n/10);
    }

    return result;
}
   */
