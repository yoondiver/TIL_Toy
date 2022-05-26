function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const firstValue = arr[0];
  const lastValue = arr[arr.length - 1];

  if (arr.length !== 0) {
    return { [firstValue]: lastValue };
  } else {
    return {};
  }
}
