// 중복된 숫자 개수
/**
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
 * array에 n이 몇 개 있는 지를 return 하도록
 * solution 함수를 완성해보세요. */

function solution(array, n) {
  //리턴값으로 쓸 정수
  var answer = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] == n) {
      //array의 i번째수와 매개변수 n이 같다면
      answer++; //answer 1 증가
    }
  }

  return answer;
}
