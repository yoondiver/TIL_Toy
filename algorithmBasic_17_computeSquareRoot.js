function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.

  let guess = Math.floor(num / 2);
  let n = 0; // while문 조건식
  while (true) {
    n++;
    let divide = num / guess;
    let decimalEight = Number(divide.toFixed(8));
    let average = (decimalEight + guess) / 2; // 추측값이랑 나눈값 중간값구하기
    let checkNum = Math.floor(average);
    if (checkNum * checkNum === num) {
      return checkNum;
    } else if (average * average < num) {
      guess = average;
      break;
    }
    guess = average;
  }
  return Number(guess.toFixed(2));
}
