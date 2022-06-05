function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 공백 나누기
  // 문자열 첫글자 어퍼케이스

  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  str = words.join(" ");
  return str;
}
