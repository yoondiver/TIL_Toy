function insertDash(str) {
  // 인덱스별 홀수를 찾는다.
  // 홀수가 연속적이면 - 추가

  if (str.length === 1) {
    return str;
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      result = result + str[i] + "-";
    } else {
      result = result + str[i];
    }
  }
  return result.slice(0, result.length - 1);
}
