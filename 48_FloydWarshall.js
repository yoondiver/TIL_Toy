function createGraphByList(num, edges) {
  const _edges = {};
  for (let i = 1; i <= num; i++) _edges[i] = [];
  edges.forEach(([src, dst, weight]) => {
    _edges[src].push({ node: dst, weight: weight });
  });
  return _edges;
}

function createGraphByMatrix(num, edges) {
  const matrix = [];
  const INF = 101;
  for (let i = 0; i <= num; i++) {
    matrix.push(Array(num + 1).fill(INF));
    matrix[i][i] = 0;
  }
  edges.forEach(([src, dst, weight]) => {
    matrix[src][dst] = weight;
  });
  return matrix;
}

// 인접 행렬을 통한 구현: O(V^3)
// V는 정점의 개수
function FloydWarshall(num, edges) {
  // 그래프를 생성한다.
  const matrix = createGraphByMatrix(num, edges);
  // dist는 두 정점간의 최단 거리를 저장하는 인접 행렬
  // dist[src][dst]는 정점 src로부터 정점 dst까지의 최단 거리
  // 처음에는 최초의 간선말고는 정보가 없으므로 그래프와 똑같이 초기화한다.
  const dist = createGraphByMatrix(num, edges);
  for (let stopover = 1; stopover <= num; stopover++) {
    for (let src = 1; src <= num; src++) {
      for (let dst = 1; dst <= num; dst++) {
        if (dist[src][stopover] + dist[stopover][dst] < dist[src][dst]) {
          dist[src][dst] = dist[src][stopover] + dist[stopover][dst];
        }
      }
    }
  }

  const INF = 101;
  const nulled = dist.map((row) =>
    row.map((col) => {
      if (col === INF) return null;
      else return col;
    })
  );
  return nulled.slice(1).map((row) => row.slice(1));
}
