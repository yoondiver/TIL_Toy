const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol2 = function (village, num) {
  // TODO: 여기에 코드를 작성합니다.

  const MOVES = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let R = village.length;
  let C = village[0].length;
  let candi = [];
  const isValid = (a, b) => a >= 0 && a < R && b >= 0 && b < C;
  for (let i = 0; i < village.length; i++) {
    for (let j = 0; j < village[i].length; j++) {
      let count = 0;
      if (village[i][j] === "2") {
        MOVES.map((el) => {
          let nextR = i + el[0];
          let nextC = j + el[1];
          if (isValid(nextR, nextC) && village[nextR][nextC] === "1") {
            count++;
          }
        });
        if (count > 0) candi.push([i, j]);
      }
    }
  }
  if (!candi.length) return 0;
  const gossip = (arr, r, c) => {
    let queue = [[r, c, 0]];
    while (queue.length) {
      let [row, col, step] = queue.shift();
      if (arr[row][col] === "1" || arr[row][col] > step) {
        arr[row][col] = step;
        step++;
        MOVES.map((el) => {
          let nextR = row + el[0];
          let nextC = col + el[1];
          if (isValid(nextR, nextC)) {
            queue.push([nextR, nextC, step]);
          }
        });
      }
    }
  };
  const combination = (arr, len) => {
    const results = [];
    if (len === 1) {
      return arr.map((element) => [element]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = combination(rest, len - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  };
  let answer = Number.MAX_SAFE_INTEGER;
  let task = combination([...candi], num);
  for (let i = 0; i < task.length; i++) {
    let clone = createMatrix(village);
    for (let j = 0; j < task[i].length; j++) {
      const [x, y] = task[i][j];
      gossip(clone, x, y);
    }
    let max = 0;
    let check = true;
    for (let i = 0; i < clone.length; i++) {
      if (!check) break;
      for (let j = 0; j < clone[i].length; j++) {
        if (clone[i][j] === "1") {
          check = false;
          break;
        }
        if (clone[i][j] > max) max = clone[i][j];
      }
    }
    if (check && answer > max) answer = max;
  }
  return answer;
};
