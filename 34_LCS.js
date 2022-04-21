const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const memo = [];

  // 중복 계산을 방지하기 위해 왼, 오
  for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));

  const compareOneByOne = (left, right) => {
    if (memo[left][right] !== -1) return memo[left][right];
  };
  return compareOneByOne;
};
