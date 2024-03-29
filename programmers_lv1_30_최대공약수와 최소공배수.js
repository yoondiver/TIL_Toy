/**
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 */

/*
function solution(n, m) {
  let answer = [];

  for (let i = 0; i <= n; i++) {
    if (m % n === 0) {
      answer.push(n);
    } else {
      answer.push(1);
    }
  }

  for (let i = 0; i <= m; i++) {
    if (m % n === 0) {
      answer.push(m);
    } else {
      answer.push(n * m);
    }
  }

  return [...new Set(answer)];
}

*/

function solution(n, m) {
  let answer = [];

  // 최대공약수 = G
  let G = 0;

  // 최소공배수 = L
  let L = 0;

  let num = n > m ? n : m;

  //최대공약수 구하기
  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      G = i;
    }
  }

  // 두 수의 곱 = 최대공약수 * 최소공배수
  // n * m = G * L
  L = (n * m) / G;
  answer = [G, L];

  return answer;
}

/*
function solution(n, m) {
    const min = Math.min(n, m);
    let common_max = 1;
    for(let i = min; i > 0; i--){
        if(n % i === 0 && m % i === 0){
            common_max = i;
            break;
        }
    }
    return [common_max, common_max * (n / common_max)* (m / common_max)];
}
*/
