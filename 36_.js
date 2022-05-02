// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

const closestPairOfPoints = function (points) {
  // TODO: 여기에 코드를 작성합니다.
  // 가장 작은 차이를 보인 두 인덱스를 저장할 배열을 선언
  // 빈 배열과 [0,0] 배열의 차이가????
  // 처음에 빈 배열을 넣었을때에만 실행 초과에러가ㄴ나옴
  let closer = [0, 0];
  // 차이값의 기준을 잡아야함. 가자 큰 값으로 지정
  let cur = Number.MAX_SAFE_INTEGER;
  // 이중 반복문으로 모든 인덱스간 차이를 계산
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      // i, j의 값이 x, y 좌표값을 빼고 매스.abs()한 값을 더해준다
      let minX = Math.abs(points[i][0] - points[j][0]);
      let minY = Math.abs(points[i][1] - points[j][1]);
      if (cur > minX + minY) {
        cur = minX + minY;
        closer = [i, j];
      }
    }
  }
  // 파스인트는 소수점 버림, 매스ceil은 올림, 매스.round가 반올림
  const dist = calculateDistance(points[closer[0]], points[closer[1]]) * 100;
  return Math.round(dist);
};
