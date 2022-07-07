function rockPaperScissors() {
  // TODO: 여기에 코드를 작성합니다.

  // 가위바위보 배열
  // 빈배열 만들어서 반복문으로 조합하고 결과값 배열에 넣

  let result = [];

  // let temp =[]
  let cases = ["rock", "paper", "scissors"];

  for (let i = 0; i < cases.length; i++) {
    for (let j = 0; j < cases.length; j++) {
      for (let k = 0; k < cases.length; k++) {
        let temp = [cases[i], cases[j], cases[k]];
        result.push(temp);
      }
    }
  }
  return result;
}
