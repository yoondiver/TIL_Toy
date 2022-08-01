function findAbbreviation(strA, strB) {
  // TODO: 여기에 코드를 작성합니다.

  const N = 100;
  // 중복 계산을 제거하기 위한 memo 배열
  // 계산되지 않은 상태를 -1로 초기화한다.
  const memo = [];
  for (let i = 0; i < N; i++) memo.push(Array(N).fill(-1));

  const isLower = (chr) => chr.toUpperCase() !== chr;

  const aux = (leftIdx, rightIdx) => {
    // 이미 계산한 적이 있는 경우, 저장된 값을 사용한다.
    if (memo[leftIdx][rightIdx] !== -1) return memo[leftIdx][rightIdx];
  };
}
