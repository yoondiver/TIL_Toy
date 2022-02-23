const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  const sorted = arr.sort((a, b) => a - b);

  const len = sorted.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];

  return Math.max(candi1, candi2);
};
