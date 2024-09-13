/*
문제 설명
사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 
예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 
다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때, 
이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 
각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ name의 길이 = yearning의 길이≤ 100
3 ≤ name의 원소의 길이 ≤ 7
name의 원소들은 알파벳 소문자로만 이루어져 있습니다.
name에는 중복된 값이 들어가지 않습니다.
1 ≤ yearning[i] ≤ 100
yearning[i]는 i번째 사람의 그리움 점수입니다.
3 ≤ photo의 길이 ≤ 100
1 ≤ photo[i]의 길이 ≤ 100
3 ≤ photo[i]의 원소(문자열)의 길이 ≤ 7
photo[i]의 원소들은 알파벳 소문자로만 이루어져 있습니다.
photo[i]의 원소들은 중복된 값이 들어가지 않습니다.
입출력 예
name	yearning	photo	result
["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	[19, 15, 6]
["kali", "mari", "don"]	[11, 1, 55]	[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]	[67, 0, 55]
["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may"],["kein", "deny", "may"], ["kon", "coni"]]	[5, 15, 0]
입출력 예 설명
입출력 예 #1

첫 번째 사진 속 "may", "kein", "kain", "radi"의 그리움 점수를 합치면 19(5 + 10 + 1 + 3)점 입니다. 
두 번째 사진 속 그리워하는 사람들인 "may"와 "kein"의 그리움 점수를 합치면 15(5 + 10)점입니다. 
세 번째 사진의 경우 "kain"과 "may"만 그리워하므로 둘의 그리움 점수를 합한 6(1 + 5)점이 사진의 추억 점수입니다. 따라서 [19, 15, 6]을 반환합니다.

입출력 예 #2

첫 번째 사진 속 그리워하는 사람들인 "kali", "mari", "don"의 그리움 점수를 합치면 67(11 + 1 + 55)점입니다. 
두 번째 사진 속엔 그리워하는 인물이 없으므로 0점입니다. 
세 번째 사진 속 그리워하는 사람은 "don"만 있으므로 55점입니다. 따라서 [67, 0, 55]를 반환합니다.
*/

function solution(name, yearning, photo) {
  // 인물의 이름과 그리움 점수를 매핑한 해시 맵
  const scoreMap = new Map();
  // 사진별 추억 점수를 담을 배열
  const scores = [];

  // 인물의 이름과 그리움 점수를 해시 맵에 저장
  for (let i = 0; i < name.length; i++) {
    scoreMap.set(name[i], yearning[i]);
  }

  // 사진별 추억 점수 계산
  for (let i = 0; i < photo.length; i++) {
    // 각 사진별 추억 점수를 누적할 변수
    let totalScore = 0;

    // 사진에 있는 인물들의 그리움 점수 합산
    for (const person of photo[i]) {
      if (scoreMap.has(person)) {
        totalScore += scoreMap.get(person);
      }
    }
    scores.push(totalScore);
  }
  return scores;
}

/*
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
*/

function solution(name, yearning, photo) {
  let obj = {};

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0).reduce(acc, cur)=> acc,0)
  );
}
