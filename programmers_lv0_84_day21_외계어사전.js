/** PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
 * 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
 * spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1,
 * 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
 */

function solution(spell, dic) {
  const result = dic.filter(
    (v) => [...v].sort().join("") === spell.sort().join("")
  );
  // spell과 dic을 알파벳 사전순으로 배열.문자열로 만들어서 비교
  return result.length === 0 ? 2 : 1;
  // 길이가 0이라면 조건 만족하는 dic 원소가 없으니까 2 리턴, 아니라면 있는 거니까 1 리턴
}

/**
 * function solution(spell, dic) {
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
  }
 */
