function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.

  const factorial = function (n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };
  // factorial 함수 만들고.

  let index = 0;

  const isUsed = Array(N + 1).fill(false);
  // 조의 수보다 하나 많은 배열을 만든다.
  // 어떤 조의 경우의 수가 활용되었는지 체크

  for (let i = 0; i < K.length; i++) {
    const num = K[i];
    isUsed[num] = true;
    // k배열의 i번째 값을 변경하여 자기 자신의 수를 제외할수있다
    // 만약 조가 3개라면 0번째 조 제외하고 동시에 0번째 조보다 작은 조로 시작하는 경우의 수를 찾는다.

    const candidates = isUsed.slice(1, num);
    // 따로 만든 이즈유즈드 배열에서 k배열 i번째 조의 위치까지 잘라서,

    const validCnt = candidates.filter((el) => el === false).length;

    // false의 개수를 세면 자기 자신보다 적은 수를 알 수 있음.

    const formerCnt = validCnt * factorial(N - i - 1);

    // 그  수 곱하기 k배열 인덱스 위치를 통해 알 수 있는 factorial값을 곱
    // k배열 각 인덱스 값을 조회하면 다양한 조별 순서구성 중 몇번째 순서구성인지 알수있다.

    index += formerCnt;
  }
  //

  return index;
}
