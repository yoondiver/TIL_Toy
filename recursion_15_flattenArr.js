function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return [];
  }

  const head = 0;
  const tail = 0;

  if (Array.isArray(head)) {
    return;
  } else {
    return [head].concat(flattenArr(tail));
  }
}