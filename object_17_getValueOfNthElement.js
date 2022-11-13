function getValueOfNthElement(arr, num) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return arr[arr.length - 1];
  }

  if (arr.length <= num) {
    return;
  } else if (arr[num]) {
    return arr[num]["name"];
  }
}
