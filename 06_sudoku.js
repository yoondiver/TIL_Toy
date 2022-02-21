const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  function nextEmptySpot(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === 0) return [i, j];
      }
    }
    return [-1, -1];
  }

  function checkRow(board, row, value) {
    for (let i = 0; i < board[row].length; i++) {
      if (board[row][i] === value) {
        return false;
      }
    }
    return true;
  }

  function checkColumn(board, column, value) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][column] === value) {
        return false;
      }
    }
    return true;
  }

  function checkSquare(board, row, column, value) {
    boxRow = Math.floor(row / 3) * 3;
    boxCol = Math.floor(column / 3) * 3;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[boxRow + r][boxCol + c] === value) {
          return false;
        }
      }
    }
    return true;
  }

  function checkValue(board, row, column, value) {
    if (
      checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)
    ) {
      return true;
    }
    return false;
  }

  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];
  if (row === -1) {
    return board;
  }

  for (let num = 1; num <= board.length; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      sudoku(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) {
    board[row][col] = 0;
  }
  return board;
};
