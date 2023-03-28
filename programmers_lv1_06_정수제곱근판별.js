/**
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 */

function solution(n) {
  const number = Math.sqrt(n);
  // n의 제곱값을 return해주는 Math.sqrt() => 결과값이 음수라면 -1로 리턴.
  return number % 1 === 0 ? Math.pow(number + 1, 2) : -1;
  // number를 정수인지 확인.. => Number.isInteger(number)로 사용 가능,
  // Math.pow(number+1, 2) => **연산자로도 사용 가능
}
