function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.

  if (num === 1) {
    return true;
  }
  if (num % 2 !== 0) {
    return false;
  }
  let power = 2;
  while (power < num) {
    power = power * 2;
  }
  return power === num;
}
