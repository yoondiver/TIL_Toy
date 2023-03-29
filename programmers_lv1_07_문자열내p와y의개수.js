/**
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 */

function solution(s) {
  var answer = true;
  let text = s.toLowerCase();
  let p = "";
  let y = "";
  for (i = 0; i < s.length; i++) {
    if (text[i] === "p") {
      p += text[i];
    } else if (text[i] === "y") {
      y += text[i];
    }
  }
  if (p.length === y.length) {
    return (answer = true);
  } else {
    answer = false;
  }
  if (p.length === 0 && y.length === 0) {
    return (answer = true);
  } else {
    answer = false;
  }
  return answer;
}

/*
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
*/
