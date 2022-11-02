function removeNumberValues(obj) {
  // TODO: 여기에 코드를 작성합니다.
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      delete obj[key];
    }
  }
}
