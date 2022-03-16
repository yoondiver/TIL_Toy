const robotPath2 = function (room, src, sDir, dst, dDir) {
  // TODO: 여기에 코드를 작성합니다.
  // 가로세로 길이
  const R = room.length;
  const C = room[0].length;

  // 4가지 방향
  const MOVES = [
    [1, -1, 0], // 위
    [2, 0, 1], // 오
    [3, 1, 0], // 아래
    [4, 0, -1], // 왼
  ];

  // 벗어나는지 확인
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 각 위치별 방향 저장
  const directions = [];

  // 각 위치별 최소 동작의 수를 저장
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  // bfs
  const queue = [];
  const enQueue = (queue, pos) => {
    queue.push(pos);
  };

  const deQueue = (queue) => {
    const pos = queue.shift();
    return pos;
  };

  // 출발 좌표
  const [sRow, sCol] = src;

  //방향 저장
  directions[sRow][sCol] = sDir;

  // 동작수 저장
  dist[sRow][sCol] = 0;

  // 목표 지점의 좌표
  const [dRow, dCol] = dst;

  enQueue(queue, [sRow, sCol]);

  while (queue.length > 0) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col]; // 방향

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      // 이동할 좌표
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      // 맵을 벗어나거나 장애물(1)이 있으면 건너뛰기
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

      // 현재 위치의 방향과 이동할 방향과의 차이
      const dDiff = Math.abs(nDir - dir);

      let candidate;
      // 출발지점에서의 방향과 이동하려는 방향이 같은 경우
      if (dDiff === 0) {
        // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야한다.
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전해야 하는 경우 : 회전 2 + 직진 1
        candidate = dist[row][col] + 3;
      } else {
        // 1번만 회전해도 되는 경우 : 회전 1 + 직진 1
        candidate = dist[row][col] + 2;
      }

      if (nRow === dRow && nCol === dCol) {
        // 다음에 도달하는곳이 목표지점인 경우
        // 목표 방향까지 고려해서 필요한 동작수를 계산
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          candidate = candidate;
        } else if (dDiff === 2) {
          candidate = candidate + 2;
        } else {
          candidate = candidate + 1;
        }
      }

      if (candidate < dist[nRow][nCol]) {
        // 유망한 좌표는 큐에 삽입
        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate;
        directions[nRow][nCol] = nDir;
      }
    }
  }
  // 도착지점에 있는 동작수를 리턴
  return dist[dRow][dCol];
};
