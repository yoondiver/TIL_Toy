/**
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(left, right) {
  function dcn(num) {
    let cnt = 0;
    let sqrt = Math.ceil(Math.sqrt(num));

    for (let i = 1; i <= sqrt; i++) {
      if (i * i === num) {
        cnt++;
      } else if (num % i === 0) {
        cnt = cnt + 2;
      }
    }

    return cnt;
  }

  let result = 0;

  for (let j = 0; j <= right; j++) {
    if (dcn(j) % 2 === 0) {
      result = result + j;
    }
  }
}
