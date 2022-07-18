function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.

  let trans = str.toLowerCase();
  // let comp = trans[0]
  // if(str.length === 0) {
  //   return true
  // }

  for (let i = 0; i < trans.length - 1; i++) {
    for (let j = i + 1; j < trans.length; j++) {
      if (trans[i] === trans[j]) {
        return false;
      }
    }
  }
  return true;
}
