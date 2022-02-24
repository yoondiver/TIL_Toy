const subsetSum = function (set, bound) {
  // TODO: 여기에 코드를 작성합니다.

  // // 재귀
  // const combination = (arr, selectNum) => {
  //   if(selectNum === 1) return arr.map((v) => [v]);
  //   let results = [];

  //   arr.forEach((fixed, idx, origin) => {
  //     const rest = origin.slice(idx + 1);
  //     const combinations = combination(rest, selectNum - 1);
  //     const attached = combinations.map((each) => [fixed, ...each]);
  //     results.push(...attached)
  //   })
  //   return results;
  // }
  // let count = 1;
  // let max = 0;

  // // 길이만큼 조합구하기
  // while(count <= set.length){
  //   let results = combination(set, count); // 재귀 ㄱㄱ
  //   results.forEach((each) => { // reduce로 각 조합의 합 구하기
  //     const sum = each.reduce((acc, cur) => acc + cur);
  //     // bound이하거나 썸보다 크면 맥스로 할당
  //     if(sum <= bound && sum > max) max = sum;

  //   })
  //   count++
  // }

  // return max;

  let max = 0;
  let reachable = {};

  // set의 값마다 돌면서
  set.forEach((member) => {
    //reachable 객체만큼 안에서 다시 돌기
    Object.keys(reachable).forEach((r) => {
      // 객체는 스트링타입으로 넘버로 변환
      const sum = Number(r) + member;
      if (sum <= bound) {
        reachable[sum] = true;
        if (sum > max) {
          max = sum;
        }
      }
    });

    if (member <= bound) {
      reachable[member] = true;
      if (member > max) {
        max = member;
      }
    }
  });

  return max;
};
