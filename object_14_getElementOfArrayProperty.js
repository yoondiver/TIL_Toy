function getElementOfArrayProperty(obj, key, index) {
  // TODO: 여기에 코드를 작성합니다.
  let arrProperty = obj[key];

  for (const key in obj) {
    if (Array.isArray(obj[key]) === true) {
      return obj[key][index];
    } else {
      return undefined;
    }
  }
}
