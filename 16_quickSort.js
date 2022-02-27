const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let pivot = arr[0];
  let left = [];
  let right = [];

  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  let allLeftSorted = quickSort(left);
  let allRightSorted = quickSort(right);

  return [...allLeftSorted, pivot, ...allRightSorted];
};
