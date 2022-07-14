function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  // 최대 공약수 유클리드 호제법
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const GCD = gcd(M, N);

  let result = [];
  // 시간복잡도를 고려하여 최대 공약수의 약수를 구함
  for (let i = 1; i <= Math.floor(Math.sqrt(GCD)); i++) {
    if (GCD % i === 0) {
      result.push([i, M / i, N / i]);
      //
      //
      if (i * i < GCD) {
        let j = GCD / i;
        result.push([j, M / j, N / j]);
      }
    }
  }
  // 최대 공약수의 약수를 오름차순 정렬
  result.sort((a, b) => a[0] - b[0]);
  return result;
}
