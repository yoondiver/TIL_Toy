function joinArrayOfArrays(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.reduce((acc, cur) => {
    return acc.concat(cur);
  });
}
