// 약수 구하기
/**
 * 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      // i가 n의 약수인 경우
      if (answer.indexOf(n / i) > -1) {
        // 또 다른 약수가 이미 저장되어 있는 경우
        break;
      } else {
        if (i === n / i) {
          // i가 n의 제곱근이면
          answer.push(i);
          break;
        } else {
          answer.push(i);
          answer.push(n / i);
        }
      }
    }
  }
  return answer.sort((a, b) => {
    return a - b;
  }); //정렬
}

/**
 * function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
  }
 */
