let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let output = [];
  output[1] = 1;
  output[2] = 2;

  for (let i = 3; i <= n; i++) {
    output[i] = output[i - 2] + output[i - 1];
  }
  return output[n];
};
