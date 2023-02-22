// 평행

/**
 * 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(dots) {
  var answer = 0;

  function calculation(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) {
      // 기울기가 같으면? +1
      answer += 1;
    }
  }

  calculation(dots[0], dots[1], dots[2], dots[3]);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}
