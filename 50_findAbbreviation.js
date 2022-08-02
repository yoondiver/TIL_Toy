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

    // base case
    if (rightIdx === strB.length)
      return strA.substring(leftIdx).split("").every(isLower);
    else if (leftIdx === strA.length) return false;

    // recursive case
    if (isLower(strA[leftIdx])) {
      if (strA[leftIdx].toUpperCase() !== strB[rightIdx]) {
        // 중복 계산을 피하기 위해 계산의 결과를 저장한다.
        memo[leftIdx + 1][rightIdx] = aux(leftIdx + 1, rightIdx);
        return memo[leftIdx + 1][rightIdx];
      }
      memo[leftIdx + 1][rightIdx + 1] = aux(leftIdx + 1, rightIdx + 1);
      memo[leftIdx + 1][rightIdx] = aux(leftIdx + 1, rightIdx);
      return memo[leftIdx + 1][rightIdx + 1] || memo[leftIdx + 1][rightIdx];
    } else {
      if (strA[leftIdx] !== strB[rightIdx]) return false;
      memo[leftIdx + 1][rightIdx + 1] = aux(leftIdx + 1, rightIdx + 1);
      return memo[leftIdx + 1][rightIdx + 1];
    }
  };

  return aux(0, 0);
}
