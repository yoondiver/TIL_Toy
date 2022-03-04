const LSCS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  let max = -100000;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};
