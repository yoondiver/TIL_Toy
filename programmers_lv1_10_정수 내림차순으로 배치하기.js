/**
 * 함수 solution은 정수 n을 매개변수로 입력받습니다.
 * n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
 * 예를들어 n이 118372면 873211을 리턴하면 됩니다.
 */

function solution(n) {
  let result = n.toString().split("").sort().reverse().join("");
  return parseInt(result);
}

/*
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}
*/

/*
function solution(n) {
  // 문자풀이
  // return parseInt((n+"").split("").sort().reverse().join(""));

  // 숫자풀이
  var r = 0,
    e = 0,
    arr = [];

  do {
    e = n % 10;

    // 정렬
    if (arr.length == 0) arr.push(e);
    else
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] <= e) {
          arr.splice(i, 0, e);
          break;
        }
        if (i == len - 1) arr.push(e);
      }
  } while (((n = Math.floor(n / 10)), n > 0));

  return parseInt(arr.join(""));
}
*/
