// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.floor(dist * 100);
}

const TSP = function (places) {
  // TODO: 여기에 코드를 작성합니다.

  // // 순열 조합을 구할 내부함수를 구현하고
  // const searcher = (arr, num) => {
  //   const cities = [];
  //   if(num === 1) return;
  // }

  // // 최단 이동거리를 저장할 이동결과값 변수를 최대안전수로 선언해둔다.
  // let result = Number.MAX_SAFE_INTEGER;

  // // 나온 조합의 모든 값을 이중반복문으로 모두 이동거리를 결과값에 누적시켜서 계산
  // const routes = searcher();

  // // 그 결과값이 이동결과값과 비교해서 작으면 갱신하는 방식으로 구현하고
  // for(let i = 0; i < routes.length - 1; i++){
  //   let distance = 0;
  //   for(let j = 0; j < routes.length - 1; j++){
  //     distance += calculateDistance(routes[i][j], routes[i][j + 1])
  //   }
  //   if(distance < result){
  //     result = distance;
  //   }
  // }

  // // 반복문이 종료한 후 이동결과값을 리턴
  // return result;
  let currentMinDist = Number.MAX_VALUE;
  const LENGTH = places.length;
  function traverse(lastVisited, visited, totalDist, visitNum) {
    if (visitNum === LENGTH) {
      if (currentMinDist > totalDist) {
        currentMinDist = totalDist;
      }
      return;
    }

    visited.forEach((value, idx) => {
      if (value === false) {
        // 아직 방문하지 않은 도시와
        // 마지막으로 방문한 도시와의 거리구하기
        const distToNext = calculateDistance(places[lastVisited], places[idx]);
        visited[idx] = true;
        traverse(idx, visited, totalDist + distToNext, visitNum + 1);
        visited[idx] = false;
      }
    });
  }

  // 각 도시의 현재 방문여부를 관리하는 배열
  const visited = Array(LENGTH).fill(false);
  places.forEach((_, idx) => {
    // 각 도시에서 출발하는 경우를 구분
    visited[idx] = true;
    traverse(idx, visited, 0, 1);
    visited[idx] = false;
  });

  return currentMinDist;
};
