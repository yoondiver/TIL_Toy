const rotateMatrix = function (matrix, o = 1) {
  // TODO: 여기에 코드를 작성합니다.

  if (matrix.length === 0) return matrix || [];

  const m = matrix.length;
  const n = matrix[0].length;

  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(Array(m));
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][m - 1 - i] = matrix[i][j];
    }
  }

  if (o === 1) return res;
  else return rotateMatrix(res, o - 1);
};
