function getAllButLastElementOfProperty(obj, key) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [];

  if (Array.isArray(obj[key]) === true && obj[key].length !== 0) {
    arr = obj[key].slice();
    arr.pop();
    return arr;
  } else {
    return [];
  }
}
