function getMax(arr) {
  return arr.reduce((max, item) => {
    if (item > max) return item;
    return max;
  }, 0);
} // 배열에서 최대값을 뽑아내는 함수

function countingSort(arr, radix) {
  // arr의 길이
  const N = arr.length;

  //[0, 0, 0]
  const output = Array(N).fill(0);

  // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const count = Array(10).fill(0);

  // 현재 자리수를 기준으로 0~9의 개수를 센다
  arr.forEach((item) => {
    const idx = Math.floor(item / radix) % 10;
    // [0, 2, 0, 1, 0, 0, 0, 0, 0, 0]
    count[idx]++;
  });

  // count[i]가 i까지의 누적 개수가 되도록 만든다
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;

    // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다
    // 1. 가장 큰 값을 먼저 본다
    // 2. 가장 큰값을 가장 마지막에 놓는다.
  });
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    // count[idx] 현재 라딕스의 idx까지 누적개수
    // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }

  return output; // 1, 21, 3
}

function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.

  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item >= 0) right.push(item);
    else left.push(item * -1);
  }); // 양수면 오른쪽에 음수면 양수로 바꿔서 왼쪽에 넣기

  let max = getMax(left); // 왼쪽의 최대값 구하기
  let radix = 1;
  while (parseInt(max / radix) > 0) {
    left = countingSort(left, radix);
    radix *= 10;
  } // 왼 정렬

  max = getMax(right); // 오른쪽의 최대값 구하기
  radix = 1;
  while (parseInt(max / radix) > 0) {
    right = countingSort(right, radix);
    radix *= 10;
  } // 오 정렬

  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
} // 정렬된 왼쪽값을 뒤집어서 다시 음수로 만든 후 , 오른쪽 값을 합치기
