const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // bfs 구현을 위해 큐를 선언
  // enQueue, deQueue 시마다 인덱싱을 다시하지 않기 위해
  // 순환 큐(circular queue)로 구현
  // 문제의 특성에 따라 큐에는 좌표 평면의 한 점이 삽입되고, 한번 삽입된 요소는 두 번 다시 삽입되지 않는다.

  const R = village.length;
  const C = village[0].length;
  const matrix = createMatrix(village);
  const MOVES = [
    [-1, 0], // 위
    [1, 0], // 아래
    [0, 1], // 오
    [0, -1], // 왼
  ];

  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  // 마을을 벗어나는지 안 벗어나는지 검사
  const queue = [];

  const enQueue = (queue, pos) => {
    queue.push(pos);
  }; // 소문을 들은 집의 좌표를 queue에 넣는다.

  const deQueue = (queue) => {
    const pos = queue.shift();
    return pos;
  }; // 소문을 들은 집의 좌표를 queue에서 빼준다

  let cnt = 0;

  enQueue(queue, [row, col]);

  // 마을 좌표의 값으로 소문이 퍼지는데 걸리는 시간을 저장
  matrix[row][col] = 0;
  while (queue.length > 0) {
    // 큐의 가장 앞 자리의 좌표를 얻는다.
    const [row, col] = deQueue(queue);
    cnt = matrix[row][col];

    // 현재 지점을 기준으로 네 방향을 검토한다.
    MOVES.forEach((move) => {
      const nextRow = row + move[0];
      const nextCol = col + move[1];
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === "1") {
        // 마을을 벗어나지 않고 소문이 퍼지지 않은 집을 queue에 넣어준다.
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1; // 소문이 퍼진 시간 증가
      }
    });
  }
  return cnt;
};
