const knapsack = function (weight, items) {
  // TODO: 여기에 코드를 작성합니다.
  let cached = Array(weight + 1).fill(0);
  items = items.filter((item) => item[0] <= weight);
  items.forEach(([wt, v]) => {
    const possible = Array(weight + 1).fill(0);
    for (let i = 0; i <= weight; i++) {
      possible[i] = cached[i];
      if (i - wt >= 0 && cached[i - wt] + v > cached[i])
        possible[i] = cached[i - wt] + v;
      if (cached[i - 1] > cached[i]) possible[i] = cached[i - 1];
    }
    cached = possible;
  });

  return cached[weight];
};
