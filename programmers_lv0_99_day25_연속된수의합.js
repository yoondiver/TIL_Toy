/**
 * 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
 */

function solution(num, total) {
  let answer = [];
  let zeroSum = 0;
  let start = 0;
  for (let i = 0; i < num; i++) {
    zeroSum += i;
  }
  for (let k = 0; k < 100; k++) {
    if (total > zeroSum) {
      zeroSum += num;
      start++;
    } else if (total < zeroSum) {
      zeroSum -= num;
      start--;
    } else if (total === zeroSum) {
      break;
    }
  }
  for (let j = 0; j < num; j++) {
    answer.push(start);
    start++;
  }
  return answer;
}

/**
 * function solution(num, total) {
    var min = Math.ceil(total/num - Math.floor(num/2));
    var max = Math.floor(total/num + Math.floor(num/2));

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}
 */
