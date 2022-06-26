function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let temp = arr[0];
  let result;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > temp) {
        result = true;
        temp = temp + arr[j + 1];
      } else if (arr[i] <= temp) {
        return false;
      }
    }
  }
  return result;
}
