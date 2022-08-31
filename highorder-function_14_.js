function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  let valueIsArr = obj[property];
  if (Array.isArray(valueIsArr)) {
    let result = valueIsArr.filter(
      (el) => typeof el === "number" && lessThan100(el)
    );
    return result;
  } else return [];
}
