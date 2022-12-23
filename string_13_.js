function compareNumbers(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  // num1 이 클경우
  if (num1 > num2) {
    return `${num1}은(는) ${num2}보다 큽니다`;
  }
  // num2 이 클경우
  if (num2 > num1) {
    return num1 + "은(는) " + num2 + "보다 작습니다";
  }
  // 같을경우
  else return "두 수는 같습니다";
}
