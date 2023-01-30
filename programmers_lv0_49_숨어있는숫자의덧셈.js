// 숨어있는숫자의덧셈

/**
 * 문자열 my_string이 매개변수로 주어집니다. 
 * my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

function solution(my_string) {
  let answer = 0;  
  my_string.split('').map(e => !isNaN(e) ? answer += Number(e) : 0);
  
  return answer;
}

/**
 * function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
  }
 */