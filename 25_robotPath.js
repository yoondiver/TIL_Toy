const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.

  const visit = Array(room.length)
    .fill(0)
    .map(() => Array());

  const queue = [[...src, 1]];
  visit[src[0]][src[1]] = 1;
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const ny = room.length - 1;
  const nx = room[0].length - 1;

  while (queue.length !== 0) {
    let result = queue.shift();
    let [y, x, cnt] = result;

    for (let i = 0; i < 4; i++) {
      let dy = y + direction[i][0];
      let dx = x + direction[i][1];

      if (dx < 0 || dy < 0 || dx > nx || dy > ny) continue;
      if (room[dy][dx] === 1) continue;
      if (visit[dy][dx]) continue;
      visit[dy][dx] = 1;
      queue.push([dy, dx, cnt + 1]);
      if (dy === dst[0] && dx === dst[1]) return result[2];
    }
  }
};
