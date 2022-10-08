function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 0) {
    return false;
  } else if (num === 1) {
    return true;
  }

  // let num1 = num * -1;
  if (num < 0) {
    num = num * -1;
  }

  return isOdd(num - 2);
  // -2를 해서 0이면 false
  // 1이면 true
}
