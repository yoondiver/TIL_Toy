function computeAverageOfNumbers(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return 0;
  }

  let total = arr.reduce(function (acc, cur) {
    return acc + cur;
  });

  return total / arr.length;
}
