// 저주의 숫자3

/**
 * 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
1	1	6	8
2	2	7	10
3	4	8	11
4	5	9	14
5	7	10	16
정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.


 */

function solution(n) {
  function noThree(v, i) {
    if (
      (i + 1) % 3 === 0 || // 3의 배수.
      (i + 1) % 10 === 3 || // 두자리 수에서 3을 이용하는 수.
      ((i + 1) % 100 >= 30 && (i + 1) % 100 <= 39) // 세자리 수에서 3을 이용하는 수.
    ) {
      return (i = "3x");
    }
    return (v = i + 1);
  }
  const noThreeVill = new Array(186).fill(0).map(noThree);
  // 186개 수중 100개가 남음.
  const noThreeVillNums = noThreeVill.filter((c) => c !== "3x"); // '3x'인 요소 필터.
  return noThreeVillNums[n - 1];
}
