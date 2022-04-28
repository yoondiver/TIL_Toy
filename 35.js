const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  // 매번 나눗셈 연산을 하는 것이 비효율적이므로 구한 수에서부터 구하기

  const uglyNumbers = [1];
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    // 1. 가장 작은 수인 1에 2, 3, 5를 곱한 수 중에 가장 작은 수를 구한다
    // 2. 2가 선택된
    // 3. 2는 가장 작은 수1에 곱해졌으므로
    //   3.1 이제 2는 그 다음 작은수인 2에 곱해지고
    //   3.2 3, 5는 여전히 가장 작은 수에 곱해진다.
    // 4. 3에서 가장 작은 수는 3.3은이제 다음 작은 수인 2에 곱해진다.
    // 5. 반복

    const nextMultipleOf2 = uglyNumbers[idx2] * 2;
    const nextMultipleOf3 = uglyNumbers[idx3] * 3;
    const nextMultipleOf5 = uglyNumbers[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNumbers.push(nextUglyNum);

    // 같은 수를 중복해서 저장할 수 있으므로,
    // 각각 별도의 조건문으로 작성해야 한다.
    // 2*3
    // 3*2
    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }

  return uglyNumbers[n - 1];
};
