function take(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 0 || arr.length === 0) {
    return [];
  }

  // let result = arr.slice(0, num)
  // return result

  const head = arr[0];
  const tail = arr.slice(1);

  return [head].concat(take(nu - 1));
}
