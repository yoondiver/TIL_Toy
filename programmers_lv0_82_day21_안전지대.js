// 안전지대

/**
 * 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(board) {
  let answer = 0; // return값 초기화.
  // 모서리 부분의 요소들의 오류를 방지하기 위해 패딩을 입히기.
  board.unshift(new Array(board.length + 2).fill(-1)); // 윗부분 패딩
  board.push(new Array(board.length + 2).fill(-1)); // 아랫부분 패딩
  // 왼쪽, 오른쪽에 패딩
  for (i = 1; i < board.length - 1; i++) {
    board[i].unshift(-1);
    board[i].push(-1);
  }
  // 원소를 포함한 9개의 위치에서 1을 발견하면 리턴값에 +1 허는 루프.
  for (i = 1; i < board.length - 1; i++) {
    for (j = 1; j < board.length - 1; j++) {
      [
        board[i - 1][j - 1],
        board[i - 1][j],
        board[i - 1][j + 1],
        board[i][j - 1],
        board[i][j],
        board[i][j + 1],
        board[i + 1][j - 1],
        board[i + 1][j],
        board[i + 1][j + 1],
      ].includes(1)
        ? answer
        : (answer += 1);
    }
  }
  return answer;
}

/*
function solution(board) {

    let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        if (it === 1) return false;
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
               ? false : safezone++;
    }));

    return safezone;
}
*/
