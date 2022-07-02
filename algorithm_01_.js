function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.

  // 박스의 갯수를 셀 변수 선언
  let count = 0;

  //짐의 무게를 오름차순으로 정렬
  stuff = stuff.sort((a, b) => a - b);
  // 짐의 무게는 배열로 구성
  // 오름차순 정렬
  // 0번째 인덱스 최소값
  // 마지막 인데스 최대값
  // 최소 최대값을 왼, 오로 선언
  let left = 0;
  let right = stuff.length - 1;

  // 왼의 값이 오를 초과할때까지 반복
  while (right >= left) {
    //
    if (stuff[left] + stuff[right] <= limit) {
      left++;
      right--;
      count++;
    } else {
      right--;
      count++;
    }
  }
  return count;
}
