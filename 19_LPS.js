const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i <= str.length / 2; i += 1) {
    let prefix = str.slice(0, i);
    let suffix = str.slice(str.length - i);

    // 반복문 길이 절반만큼 실행
    if (prefix === suffix) {
      result = prefix;
    }
  }
  return result.length;
};
