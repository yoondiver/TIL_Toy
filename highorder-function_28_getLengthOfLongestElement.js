function getLengthOfLongestElement(arr) {
  // 여기에 코드를 입력하세요
  if (arr.length === 0) return 0;
  return arr.reduce((acc, cur) => {
    if (cur.length <= acc.length) return acc; // <도 됨
    else return cur;
  }).length;
}
