const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i < arr.length; i++) {
    index = i;
    while (arr[index - 1] > arr[index]) {
      let temp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = temp;
      index--;
    }
  }

  return arr;

  // let result = [arr[0]];

  // for (let i = 1; i < arr.length; i++){
  //   // 만약 해당요소가 자기 왼쪽요소보다 높다면
  //   if(arr[i] >= result [i - 1]){
  //     result.push(arr[i])
  //   } else {
  //     // 결과 배열을 순회해서 자기 자리를 찾기
  //     for( let j = 0; j < i; j++){
  //       if(arr[i] <= result[i]){
  //         // 자리를 찾으면 해당 인덱스를 기준 좌우로 나눔
  //         let left = result.slice(0, j)
  //         let right = result.slice(j)

  //         // concat으로 합치기
  //         result = left.concat(arr[i], right);
  //         break;
  //       }
  //     }
  //   }
  // }
  // return result;
};
