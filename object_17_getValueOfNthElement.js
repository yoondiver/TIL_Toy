function getValueOfNthElement(arr, num) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return "no name";
  }
  if (arr.length <= num) {
    return arr[arr.length - 1]["name"];
  } else if (arr[num]) {
    return arr[num]["name"];
  }
}
