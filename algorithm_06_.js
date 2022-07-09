function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.

  // 0이 3개 미만인 재료만 따로 배열
  let freshArr = [];

  for (let i = 0; i < stuffArr.length; i++) {
    const element = String(stuffArr[i])
      .split("")
      .filter((e) => e === "0");
    if (element.length <= 2) {
      freshArr.push(stuffArr[i]);
    }
  }

  // 수열은 순서를 고려하면서 뽑는다.
  // [1, 2, 3, 4]에서 3가지 수를 뽑는 경우를 반환한다고 했을 때,
  // [2, 3, 4]에서 2가지 수를 뽑는 경우에 1을 추가하고, [1, 3, 4]에서 2가지 수를 뽑는 경우에 2를 추가하는 등
  // 재귀를 활용하여 문제를 해결할 수 있다.

  let result = [];

  // 탈출조건
  if (choiceNum === 1) return freshArr.map((item) => [item]);

  // forEach에서 활용가능한 전달인자를 모두 사용
  freshArr.forEach((value, index, origin) => {
    // value를 제외한 나머지 구하기
    // (나머지의 숫자-1 만큼 뽑는 경우를 각 value에 더해주면, 그게 리절트)
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    // 재귀
    const permutations = newChickenRecipe(rest, choiceNum - 1);

    // 그 배열의 모든 요소를 현재 벨류에서 붙여준다
    const attach = permutations.map((el) => [value, ...el]);
    result.push(...attach);
  });

  return result;
}
