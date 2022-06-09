function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = str.split("  ");
  result = result.join(" ");
  return result;
}
