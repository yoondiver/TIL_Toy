/**
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 * 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 * 각 단어의 짝수번째 알파벳은 대문자로,
 * 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 */

function solution(s) {
  var answer = "";

  // 짝수 toUpperCase()
  // 홀수 toLowerCase()

  // split() 함수 : 문자열 -> 배열로 바꿈
  // [ 'try', 'hi', 'you' ]
  let arr = s.split(" ");
  // console.log(arr);

  // 2차 배열
  // [[ 't', 'r', 'y' ],[ 'h', 'i' ],[ 'y', 'o', 'u' ]]
  let arr1 = arr.map((v) => [...v]);
  // console.log(arr1);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (j % 2 == 0) {
        answer += arr1[i][j].toUpperCase();
      } else {
        answer += arr1[i][j].toLowerCase();
      }
    }
    answer += " ";
  }

  // 마지막 공백제거
  answer = answer.substring(0, answer.length - 1);

  return answer;
}

/*
function solution(s) {
  let arr = s.split(" ");
  return arr.map(v => {
      let newStr="", num=0;
      for(let str of v){
          newStr += !(num%2)? str.toUpperCase(): str.toLowerCase();
          num++;
      }
      return newStr;
  }).join(" ");
}
*/
