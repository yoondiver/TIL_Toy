// 최빈값 구하기
/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
 * 최빈값이 여러 개면 -1을 return 합니다.
 */
function solution(array) {
  let setArr = [...new Set(array)]; //array 중복제거
  let cnt = []; //setArr 요소별 카운트값 담을 배열
  for (let i = 0; i < setArr.length; i++) {
    let iCnt = array.filter((x) => x == setArr[i]).length;
    cnt.push(iCnt);
  }
}
