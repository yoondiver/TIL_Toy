const countIslands = function (grid) {
  // TODO: 여기에 코드를 작성합니다.
  // // 1의 좌표를 저장해줄 빈 배열 선언
  // let sum = [];

  // // 그리드의 길이만큼 순회
  // // 그리드의 한 인덱스를 순회하는 중 1을 만나면 1의 좌표를 배열에 저장
  // // 1을 타색했을때, 저장된 좌표에서 인접한 좌표를 찾아 배열 내 배열로 같이 저장
  // // 1을 탐색했을때, 저장된 좌표와 인접한 좌표가 없으면 배열내에 새배열로 저장
  // for(let i = 0; i < grid.length; i++){
  //   for(let j = 0; j < grid[i].length; j++){
  //     // 이중반복문을 써서 요소를 전부 탐색, 요소가 1인지를 ㅌ체크
  //     if(grid[i][j] === '1'){
  //       // 1이라면, 섬배열에 저장된 좌표와 비교해야함, 마찬가지로 순회해서 비교
  //       // 섬배열에 저장할 배열구조가 문제인데, 배열 내에 섬별로 2중배열을 만들어줄거고
  //       // 그 2중배열안에 좌표값을 저장해야하니까, 좌표 또한 배열 구조로 저장해야하나..
  //       // 섬 배열에 저장할 구조는 [ㅑ,ㅓ] [ㅏ, ㅣ] 구조니까 2중 반복문 순회
  //       // 문제는 빈 배열일때, 이것도 이프문 처리하면 될듯?
  //       if(sum.length === 0){ // 섬이 비었다면, 첫 요소이니까 그냥넣고
  //         sum.push([[i, j]])
  //       } else { // 아니면 순회시켜서 좌표중에 하나라도 겹치는 친구들은 한 인덱스에 몰아 넣고
  //         for ( let k = 0; k < sum.length; k++){
  //           for ( let l = 0; l < sum[k].length; l++){
  //             break; // 탈출
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // // 탐색을 완료한 후 배열의 길이 리턴
  // return sum.length;

  // dfs solution
  const HEIGHT = grid.length;
  const WIDTH = HEIGHT && grid[0].length;
  let count = 0;

  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      if (grid[row][col] === "0") continue;
      count++;
      searchIsland(row, col);
    }
  }

  function searchIsland(row, col) {
    if (row < 0 || col < 0 || row >= HEIGHT || col >= WIDTH) return;
    if (grid[row][col] === "0") return;

    grid[row][col] = "0";
    searchIsland(row - 1, col);
    searchIsland(row + 1, col);
    searchIsland(row, col - 1);
    searchIsland(row, col + 1);
  }

  return count;
};
