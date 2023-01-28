// 합성수 찾기
/**
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 * 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
  let compositeNumbers = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        // 1과 i 자기 자신을 제외한 나머지수를 i로 나눌때도 나누어 떨어지면 합성수이다
        compositeNumbers.push(i);
        break;
      }
    }
  }

  return compositeNumbers.length;
}
