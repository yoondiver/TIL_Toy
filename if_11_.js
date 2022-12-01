function isEitherEvenAndLessThan9(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  // if((num1 %2 === 1 && num2 %2 === 1) || (num1 >=9 || num2 >=9)){
  //   return false
  // } else return true

  if (num1 < 9 && num2 < 9 && (num1 % 2 === 0 || num2 % 2 === 0)) {
    return true;
  }
}
