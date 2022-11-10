function printObject(obj) {
  // TODO: 여기에 코드를 작성합니다.

  let result = "";
  for (let i in obj) {
    result = result + `${i}: ${obj[i]}\n`;
  }
  return result;
}
