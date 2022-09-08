function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = obj[property];
  if (Array.isArray(arr)) {
    return arr.map((el) => square(el));
  }
}
