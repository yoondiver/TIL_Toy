// 그래프 구현이 필요없는 알고리즘: O(V * E)
// V는 정점의 개수, E는 간선의 개수
function BellmanFord(num, edges, start) {
  const INF = Number.MAX_SAFE_INTEGER;
  const dist = Array(num + 1).fill(INF);
  dist[start] = 0;
}
