/**
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 */

function solution(arr, divisor) {
  var answer = [];

  // map()함수
  // map((item, index) => {});
  arr.map((v, i) => {
    if (v % divisor == 0) {
      answer.push(v);
    }
  });

  // 오름차순(asc)정렬 (낮 -> 높)
  answer.sort(function (a, b) {
    return a - b;
  });

  if (answer.length == 0) {
    answer.push(-1);
  }

  return answer;
}

/*
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
*/
