function shadowOfPapers(papers) {
  // TODO: 여기에 코드를 작성합니다.

  // 최대 컬럼 길이 구하기
  let macX = 0;
  for (let i = 0; i < papers.length; i++) {
    let [x, y, ox, oy] = papers[i];
    macX = Math.max(macX, y + oy);
  }

  let ridx = 0;
  let sum = 0;

  // papers 길이 탐색

  while (papers.length) {
    let col = new Array(macX).fill(0);
    let len = papers.length;
    for (let i = 0; i < len; i++) {
      let [x, y, ox, oy] = papers.shift();

      // 로우값이 0부터 세로로 넓이를 구할것이므로 ridx 와 x가 같다면 높이만큼 1찍어주기
      // 이후 x의 너비가 남았으면 다음 탐색에도 해당하는 높이를 찍어야하기때문에 x+1, 너비는 -1해주기
      if (x === ridx) {
        for (let j = y; j < y + oy; j++) {
          col[j] = 1;
        }
        if (ox === 1) continue;
        else {
          papers.push([x + 1, y, ox - 1, oy]);
        }
      } else {
        papers.push([x, y, ox, oy]);
      }
    }
    let count = 0;
    // papers길이만큼 탐색이 끝나면 1의 개수를 썸에 더해주고 다음 로우를 탐색해야하기때문에 ridx +1
    for (let i = 0; i < col.length; i++) {
      if (col[i] === 1) count++;
    }
    sum += count;
    ridx++;
  }

  // 최종값 리턴
  return sum;
}
