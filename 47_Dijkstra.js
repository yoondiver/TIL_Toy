function createGraphByList(num, edges) {
  // 연결 리스트로 그래프 구현
  // 정확하게 연결 리스트는 아니지만,
  // 저장 공간을 줄일 수 있고, 간선 조회가 O(E)라는 점에서 비슷
  const _edges = {};
  for (let i = 1; i <= num; i++) _edges[i] = [];
  edges.forEach(([src, dst, weight]) => {
    // 무방향 그래프이므로 양쪽 방향 모두에 간선을 추가한다.
    _edges[src].push({ node: dst, weight: weight });
    _edges[dst].push({ node: src, weight: weight });
  });
  return _edges;
}

function createGraphByMatrix(num, edges) {
  // 인접 행렬로 그래프 구현
  // num X num 만큼의 저장 공간이 필요
  // 아래에서는 인덱스를 직관적으로 관리하기 위해 (num + 1) X (num + 1)의 공간을 사용
  // 간선 조회는 O(1)
  const matrix = [];
  // 간선은 100 이하의 양의 정수 이므로 경로가 없는 경우 101로 초기화한다.
  // INF는 INFINITY의 약자이다.

  const INF = 101;
  for (let row = 0; row <= num; row++) {
    // 최단거리를 구해야하기 때문에, 간선이 없는 구간의 거리는 무한대로 간주한다.
    // 엄밀한 의미의 무한대는 불가능하므로, 런타임(node.js)이 표현할 수 있는 가장 큰 수로 초기화한다.
    matrix.push(Array(num + 1).fill(INF));
    // 자기 자신과의 거리는 0
    // matrix[row][i] = 0;
  }

  edges.forEach(([src, dst, weight]) => {
    // 무방향 그래프이므로 양쪽 방향 모두에 간선을 추가한다.
    matrix[src][dst] = matrix[dst][src] = weight;
  });
  return matrix;
}

function Dijkstra(num, edges, start, end) {
  // TODO: 여기에 코드를 작성합니다.
}
