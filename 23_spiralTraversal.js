const insertTop = (matrix, result) => {
  for (let el of matrix[0]) {
    result += el;
  }
  matrix.shift();
  return result;
};

const insertBottom = (matrix, result) => {
  matrix[matrix.length - 1].reverse();
  for (let el of matrix[matrix.length - 1]) {
    result += el;
  }
  matrix.pop();
  return result;
};

const insertLeft = (matrix, result) => {
  for (let i = matrix.length - 1; i >= 0; i--) {
    let char = matrix[i].shift();
    result += char;
  }
  return result;
};

const insertRigth = (matrix, result) => {
  for (let i = 0; i < matrix.length; i++) {
    let char = matrix[i].pop();
    result += char;
  }
  return result;
};

const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.

  let result = "";

  while (true) {
    result = insertTop(matrix, result);
    if (matrix.length === 0) break;
    result = insertRigth(matrix, result);

    result = insertBottom(matrix, result);

    if (matrix.length === 0) break;

    result = insertLeft(matrix, result);
  }

  return result;
};
