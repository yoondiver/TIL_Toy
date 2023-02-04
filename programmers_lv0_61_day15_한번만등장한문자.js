// 한 번만 등장한 문자
/**
 * 문자열 s가 매개변수로 주어집니다.
 * s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 */

function solution(s) {
  s = s.split("").sort(); //s를 배열로 변환 후 사전순으로 정렬
  let answer = "";
  while (s.length > 0) {
    if (s.lastIndexOf(s[0]) === 0) {
      //s[0]가 한 번만 등장했을 경우
      answer += s[0]; //answer에 더해주고
      s = s.slice(1); //s[0]를 제거한 배열을 리턴
    } else {
      //여러번 등장했을 경우
      s = s.slice(s.lastIndexOf(s[0]) + 1); //s[0]를 제거한 배열을 리턴
    }
  }
  return answer;
}
