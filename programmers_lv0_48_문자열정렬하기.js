// 문자열 정렬하기 (1)
/**
 * 문자열 my_string이 매개변수로 주어질 때, 
 * my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
 */

function solution(my_string) {
    //정규식을 이용해 숫자만 찾는다.
    let numbers = my_string
        .match(/[0-9]/g)

        //string type을 number로 변환한다.
        .map(str => parseInt(str))
        
        //오름차순 정렬
        .sort((a, b) => a - b);
    return numbers;
}