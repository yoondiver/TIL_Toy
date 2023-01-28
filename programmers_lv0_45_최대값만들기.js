// 최대값 만들기
/**
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(number[i] * numbers[j]);
      }
    }
  }
  return Math.max(...answer);
}

/**
 * function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
  }
 */
