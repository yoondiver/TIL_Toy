function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  let first = num1;
  let second = num2;

  if (num1 === 0) return 0;
  if (num2 === 0) return "Error: cannot divide by zero";

  for (let i = second; i <= first; i += second) {
    num1 = num1 - num2;
  }
  return num1;
}
