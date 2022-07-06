function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.

  let score = 0;
  let x = 0;
  let y = 0;

  let current = board[0][0];

  // 반복문으로 움직이는 방향설정
  for (let i = 0; i < operation.length; i++) {
    if (operation[i] === "U") {
      (y -= 1), (x += 0);
    }

    if (operation[i] === "D") {
      (y += 1), (x += 0);
    }

    if (operation[i] === "L") {
      (y += 0), (x -= 1);
    }

    if (operation[i] === "R") {
      (y += 0), (x += 1);
    }

    // 보드가 아웃일때
    if (x < 0 || y < 0 || board.length < y || board.length < x) {
      return "OUT";
    }

    current = board[y][x];
    score = score + current;
  }
  return score;
}
