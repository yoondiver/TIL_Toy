function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  if (exponent === 0) {
    return 1;
  }

  const halfE = Math.floor(exponent / 2);
  const rec = power(base, halfE);
  let result = (rec * rec) % 1000000009;

  if (exponent % 2 !== 0) {
    result = (result * base) % 1000000009;
  }
  return result;
}
