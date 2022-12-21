function dropLetters(num, str) {
  // TODO: 여기에 코드를 작성합니다.

  if (num <= str.length) {
    return str.slice(num, str.length);
  } else return str.slice(str.length);
}
