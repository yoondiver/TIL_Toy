function removeArrayValues(obj) {
  // TODO: 여기에 코드를 작성합니다.
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
}
