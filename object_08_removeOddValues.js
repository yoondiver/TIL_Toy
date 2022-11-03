function removeOddValues(obj) {
  // TODO: 여기에 코드를 작성합니다.
  for (let prop in obj) {
    if (typeof obj[prop] === "number" && obj[prop]) {
      delete obj[prop];
    }
  }
}
