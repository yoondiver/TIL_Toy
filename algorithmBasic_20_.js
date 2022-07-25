function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.

  // count 가 3 이상이고, str[i] !== str[i+1]   count와 str[i]
  // count 를 세어줍니다
  // 연속될경우 count + 1;
  // 연속되지않을경우 count 3이상이면 카운트 붙이고 알파벳
  // 연속되지않을경우 count 3미만이면 카운트 안붙이

  let comp = "";
  let count = 1;

  if (str.length === 0) {
    return "";
  }
  // 모든 문자를 count + string 형식으로 압축
  for (i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count = count + 1;
    } else if (str[i] !== str[i - 1] || str[i] === undefined) {
      comp = comp + count + str[i - 1];
      count = 1;
    }
  }

  // for문을 돌면서 만약 count < 3 인경우, 해당숫자만큼 문자 입력
  // '3w2g1o2p'
  // 1인경우 패쓰..   2인경우, 문자, str[i+1] 를 더해준다.

  let result = "";
  console.log(comp, result);
  for (i = 0; i < comp.length; i++) {
    if (comp[i] === "1") {
      result = result;
    } else if (comp[i] === "2") {
      result = result + comp[i + 1];
    } else {
      result = result + comp[i];
    }
  }
  return result;
}
