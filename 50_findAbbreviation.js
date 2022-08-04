// naive solution
// function findAbbreviation(strA, strB) {
//   const isLower = (chr) => chr.toUpperCase() !== chr;

//   const aux = (leftIdx, rightIdx) => {
//     // base case 1
//     // strA로 strB를 만들 수 있고
//     // strA의 문자가 남아있지 않거나, 남은 문자가 전부 소문자인 경우 (전부 제거 가능)
//     if (rightIdx === strB.length)
//       return strA.substring(leftIdx).split('').every(isLower);

//     // base case 2
//     // strA의 모든 문자를 검토했으나
//     // strB의 문자가 남아있는 경우
//     if (leftIdx === strA.length) return false;

//     // recursive case
//     if (isLower(strA[leftIdx])) {
//       // 1) 현재 검토 중인 strA의 문자가 소문자인 경우
//       // 대문자로 변경하거나 제거가 가능한다.
//       // 매칭이 되지 않은 경우 제거한다.
//       if (strA[leftIdx].toUpperCase() !== strB[rightIdx])
//         return aux(leftIdx + 1, rightIdx);
//       // 매칭이 된 경우, 문자로 변경하거나 제거한다.
//       // 매칭이 되었는데도 제거를 하는 경우의 예시 (입력으로 'eE', 'E'를 받은 경우)
//       return aux(leftIdx + 1, rightIdx + 1) || aux(leftIdx + 1, rightIdx);
//     } else {
//       // 2) 현재 검토 중인 strA의 문자가 대문자인 경우
//       // 대문자는 제거가 불가능하고 그대로 사용할 수 밖에 없다.
//       // 따라서 매칭 여부가 중요하다.
//       // 매칭되지 않은 경우 탐색을 중단한다.
//       if (strA[leftIdx] !== strB[rightIdx]) return false;
//       // 매칭이 된 경우 다음 문자를 검토한다.
//       return aux(leftIdx + 1, rightIdx + 1);
//     }
//   };

//   return aux(0, 0);
// }

// memoization
function findAbbreviation(strA, strB) {
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

// memoization with higher order function
// function findAbbreviation(strA, strB) {
//   const isLower = (chr) => chr.toUpperCase() !== chr;

//   let aux = (leftIdx, rightIdx) => {
//     // base case
//     if (rightIdx === strB.length)
//       return strA.substring(leftIdx).split('').every(isLower);
//     else if (leftIdx === strA.length) return false;

//     // recursive case
//     if (isLower(strA[leftIdx])) {
//       if (strA[leftIdx].toUpperCase() !== strB[rightIdx])
//         return aux(leftIdx + 1, rightIdx);
//       return aux(leftIdx + 1, rightIdx + 1) || aux(leftIdx + 1, rightIdx);
//     } else {
//       if (strA[leftIdx] !== strB[rightIdx]) return false;
//       return aux(leftIdx + 1, rightIdx + 1);
//     }
//   };

//   const memoize = (func) => {
//     const memo = {};
//     // 매개변수를 통해 계산(함수 호출)을 구분한다.
//     return (...args) => {
//       const problem = args.join('-');
//       if (problem in memo) return memo[problem];
//       // 할당과 리턴을 동시에 할 수 있음
//       else return (memo[problem] = func(...args));
//     };
//   };

//   // 첫 호출의 함수와 재귀 호출이 함수가 달라질 수 있으므로 재할당이 필요하다.
//   aux = memoize(aux);
//   return aux(0, 0);
// }
