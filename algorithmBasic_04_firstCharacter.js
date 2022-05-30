function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let biggin = str.split(" ");
  let output = "";
  if (str === "") {
    return "";
  }
  for (i = 0; i < biggin.length; i++) {
    output = output + biggin[i][0];
  }
  return output;
}
