const result = [0, 1];

function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  if (result[n] === undefined) {
    result[n] = fibonacci(n - 2) + fibonacci(n - 1);
  }
  return result[n];
}
