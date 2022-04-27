const LIS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.

  // 메모 [i]는 i 부터 시작하는 리스의 길이를 길이를 저장
  const memo = Array(arr.length).fill(-1);

  // 마지막 요소부터 시작하는 리스는 1이 유일
  memo[memo.length - 1] = 1;
  const calculateLIS = (idx) => {
    if (memo[idx] !== -1) return memo[idx];

    let max = 1;
    for (let i = idx + 1; i < arr.length; i++) {
      const len = calculateLIS(i);
      // idx와 i가 여결되지 않을 수도 있다
      if (arr[idx] < arr[i]) {
        // i부터 시작하는 LIS를 연결할 수 있는 경우
        max = Math.max(max, len + 1);
      }

      // i부터 시작하는리스가 더 길 수도 있다
      // idx부터 시작하는 리스를 구해야 하므로, 무시한다
    }
    memo[idx] = max;
    return memo[idx];
  };
  calculateLIS(0);
  // 가장 긴 길이를 구한다
  return Math.max(...memo);
};
