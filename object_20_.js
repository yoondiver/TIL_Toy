function countAllCharacters(str) {
  // TODO: 여기에 코드를 작성합니다.

  let result = {};

  for (let char of str) {
    if(char in result === false){
      result[char];
      
    }
  } else {
    result [char] += 1
  }
  return result
}
