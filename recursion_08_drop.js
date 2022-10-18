function drop(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 0) {
    return arr;
  }
  if (num >= arr.length) {
    return [];
  }

  return drop(num - 1);
}
