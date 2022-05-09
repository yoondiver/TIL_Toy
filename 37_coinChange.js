const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.
  const makeChangeFrom = (left, idx) => {
    if (left === 0) return 1;

    let cnt = 0;
    // 지금 사ㅛㅇ하고 있는 동전부터 고려한다.
    for (let i = idx; i < coins.length; i++) {
      if (left - coins[i] >= 0) {
        cnt = cnt + makeChangeFrom(left - coins[i], i);
      }
    }
    return cnt;
  };
  return makeChangeFrom(total, 0);
};
