function isPythagorean(side1, side2, side3) {
  // TODO: 여기에 코드를 작성합니다.
  //
  if (side1 > side2 && side1 > side3) {
    if (Math.pow(side1, 2) === side2 * side2 + Math.pow(side3, 2)) {
      return true;
    } else return false;
  } else if (side2 > side1 && side2 > side3) {
    if (Math.pow(side2, 2) === side1 ** 2 + Math.pow(side3, 2)) {
      return true;
    } else return false;
  } else if (side3 > side1 && side3 > side2) {
    if (Math.pow(side3, 2) === side2 * side2 + Math.pow(side1, 2)) {
      return true;
    } else return false;
  }
}
