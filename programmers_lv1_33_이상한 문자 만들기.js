/**
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 * 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 * 각 단어의 짝수번째 알파벳은 대문자로,
 * 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 */

function solution(s) {
  var answer = "";

  // split() 함수 : 문자열 -> 배열로 바꿈
  // [ 'try', 'hi', 'you' ]
  let arr = s.split(" ");
  console.log(arr);

  // 2차 배열
  // [[ 't', 'r', 'y' ],[ 'h', 'i' ],[ 'y', 'o', 'u' ]]
  let arr1 = arr.map((v) => [...v]);
  console.log(arr1);

  for (let i = 0; i < arr1.length; i++) {
    answer = 0;
  }

  return answer;
}
