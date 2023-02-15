/**
 * 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
 * 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가
 * 담겨있는 배열 dots가 매개변수로 주어질 때,
 * 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
 */

function solution(dots) {
  let len1 = Math.sqrt(
    (dots[0][0] - dots[1][0]) ** 2 + (dots[0][1] - dots[1][1]) ** 2
  );
  let len2 = Math.sqrt(
    (dots[0][0] - dots[2][0]) ** 2 + (dots[0][1] - dots[2][1]) ** 2
  );
  let len3 = Math.sqrt(
    (dots[0][0] - dots[3][0]) ** 2 + (dots[0][1] - dots[3][1]) ** 2
  );
  let s = Math.max(...[len1, len2, len3]);
  var answer =
    len1 === s ? len2 * len3 : len2 === s ? len1 * len3 : len1 * len2;
  return answer;
}
