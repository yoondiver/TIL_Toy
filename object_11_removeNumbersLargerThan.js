function removeNumbersLargerThan(num, obj) {
  // TODO: 여기에 코드를 작성합니다.
  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] > num) {
      delete obj[key];
    }
  }
}
