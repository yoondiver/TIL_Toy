function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.

  let bag = [1];
  for (let i = 0; i <= target; i++) bag.push(0);
  for (let i = 0; i < type.length; i++) {
    for (let j = 1; j <= target; j++) {
      if (type[i] <= j) {
        bag[j] = bag[j] + bag[j - type[i]];
      }
    }
  }

  return bag[target];
}
