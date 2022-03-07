const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 1) {
    return arr; // 배열이 1이면 반환
  }
  let half = Math.floor(arr.length / 2);

  // 배열 나눈거1
  let one = mergeSort(arr.slice(0, half));

  // 다른 배열1
  let two = mergeSort(arr.slice(half));

  // 병합한 배열 리턴
  return merge(one, two);
};

const merge = (one, two) => {
  let result = [];
  while (one.length && two.length) {
    if (one[0] <= two[0]) {
      result.push(one.shift());
    } else {
      result.push(two.shift());
    }
  }

  while (one.length) result.push(one.shift());
  while (two.length) result.push(two.shift());
  return result;
};
