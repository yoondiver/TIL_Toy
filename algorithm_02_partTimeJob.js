function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.

  // 갯수 카운트
  let count = 0;

  // 동전 내림차수
  let wallet = [500, 100, 50, 10, 5, 1];

  // wallet 순회
  for (let i = 0; i < wallet.length; i++) {
    let a = parseInt(k / wallet[i]);
    count += a;
    k = k % wallet[i];
  }
  return count;
}
