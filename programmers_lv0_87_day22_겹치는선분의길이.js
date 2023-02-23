/**
 * 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
 */

function solution(lines) {
  const start = lines.map((v) => v[0]);
  const end = lines.map((v) => v[1]);

  let count = 0;
  let intersection = 0;

  for (let i = Math.min(...start); i <= Math.max(...end); i++) {
    for (let j = 0; j < lines.length; j++) {
      if (i >= start[j] && i < end[j]) {
        count++;
      }
    }
    if (count >= 2) {
      intersection++;
    }
    count = 0;
  }

  return intersection;
}

/**
 * function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}
 */
