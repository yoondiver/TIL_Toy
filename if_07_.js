function fizzBuzz(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 3과 5로 모두 나누어 떨어지는 경우, 'FizzBuzz'

  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }

  // 3으로 나누어 떨어지는 경우, 'Fizz'
  else if (num % 3 === 0) {
    return "Fizz";
  }

  // 5으로 나누어 떨어지는 경우, 'Buzz'
  else if (num % 5 === 0) {
    return "Buzz";
  }

  // 3이나 5로 나누어 떨어지지 않는 경우, 'No FizzBuzz'
  else return "No FizzBuzz";
}
