const decompression = function (image) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열을 평가한 값을 빈 스트링에 누적해뒀다가 종료 시점에 리턴 시켜주자
  // let result = '';
  // 빈 배열을 전달받으면 결과스트링을 리턴시키고
  // if(image.length === 0) return result; // 빈 스트링을 리턴해야 할까?
  // 전달받은 배열이 요소가 있는 배열이면, 배열을 평가
  // 배열이 1요소 배열이면 바로 그 값을 결과에 누적
  // if(image.length === 1){
  //   result = result + image[0];
  // }
  // // 아니면 전체 순회, 배열을 평가해야함, 0,1전체인지 아닌지
  // else{
  //   // 전체 값을 평가, 0번부터 하나씩 대조하다가 이전 값과 다른 값이 나오는 순간에 결과에 x누적
  //   // 배열을 4등분해서 재귀
  //   // 모든값을 비교할때까지 다른 값이 아니라면 마지막 값을 결과스트링에 누적하고 종료
  //   // 시작값을 기준값으로 정하고 이거랑 비교
  //   let cur = image[0][0];
  //   for(let i = 0; i < image.length; i++){
  //     for(let j = 0; j < image.length; j++){
  //       if(image[i][j] !== cur){
  //         result = result + 'x'
  //         // 배열을 사등분해서 좌상,우상,좌하,우하 순으로 재귀

  //         // 배열의 길이를 2등분해서 새 배열을 만들어주고 순서대로 재귀시키면
  //         // 새 배열들도 반복문으로 만들어줘야할까
  //         let a = [], b = [], c = [], d = [];
  //         for(let m = 0; m < image.length / 2; m++){
  //           a.push([]), b.push([]), c.push([]), d.push([])
  //         }
  //         for(let k = 0; k < image.length; k++){
  //           for(let l = 0; l < image.length; l++){
  //             if(k < image.length / 2 && l < image.length / 2){
  //               // a
  //             }
  //             if(k < image.length / 2 && l < image.length / 2){
  //               // b
  //             }
  //             if(k > image.length / 2 && l < image.length / 2){
  //               // c
  //             }
  //             if(k > image.length / 2 && l < image.length / 2){
  //               // d
  //             }
  //           }
  //         }
  //         break;
  //       }
  //     }
  //   }
  //   // 안걸리고 반복문이 종료되면 기준값을 결과에 누적
  //   result = result + cur;
  // }
  // return result;

  // 재귀를 위한 보조함수
  // 파라미터는 차례대로 y좌표의 시작, y좌표의 끝,
  const aux = (rs, re, cs, ce, image) => {
    // 베이스
    // 각 좌표에는 number 타입이 저장되어있다.
    if (rs === re) return String(image[rs][cs]);

    // 좌상, 우상, 좌하, 우하
    const midRow = Math.floor((rs + re) / 2);
    const midCol = Math.floor((cs + ce) / 2);
    const leftUpper = aux(rs, midRow, cs, midCol, image);
    const rightUpper = aux(rs, midRow, midCol + 1, ce, image);
    const leftDown = aux(midRow + 1, re, cs, midCol, image);
    const rightDown = aux(midRow + 1, re, midCol + 1, ce, image);

    //주어진 사각형 전체를 순회하고 나서 재귀를 하거나
    // 4등분한 각 사각형을 각각 순호ㅓㅣ하고나서 재귀를 하는 방식은 데이터를 중복 조회하게 한다.
    // 재귀적으로 각 결과를 합치면서 계산하면 모든 좌표를 한번씩만 검토하면 된다.
    const result = leftUpper + rightUpper + leftDown + rightDown;
    if (result === "1111") return "1";
    else if (result === "0000") return "0";
    else return "X" + result;
  };
  return aux(0, image.length - 1, 0, image.length - 1, image);
};
