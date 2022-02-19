const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.

  //
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let isSame = 0;
  for (let i = 0; i < base.length; i++) {
    for (let j = 0; j < sample.length; j++) {
      if (base[i] === sample[j]) {
        isSame++;
        i++;
      }
    }
  }
  if (isSame === sample.length) {
    return true;
  } else {
    return false;
  }
};
