function getDoubledElements(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length !== 0) {
    arr = arr.map(function (el) {
      return el * 2;
    });
  }
  return arr;
}
