/*
네오와 프로도가 숫자놀이를 하고 있습니다. 
네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
*/

function solution(s) {
  let answer = s;

  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reg = new RegExp(word, "g");

    answer = answer.replace(reg, i);
  }

  return parseInt(answer);
}

const testA = solutionA("one4seveneight");
console.log(testA);

/*
function solution(s) {
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .forEach((el, i) => {
    if (s.includes(el)) s = s.replace(el, i);
  });
  return Number(s);
}
*/

/*
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function solution(s) {
    numbers.forEach((str,i)=>{
        s = s.split(str).join(i)
    })
    return Number(s)
}
*/

/*
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      answer = arr.join(i);
  }

  return Number(answer);
}
*/

/*
function solution(s) {
  s = s.replace(/zero/gi, 0)
  .replace(/one/gi, 1)
  .replace(/two/gi, 2)
  .replace(/three/gi, 3)
  .replace(/four/gi, 4)
  .replace(/five/gi, 5)
  .replace(/six/gi, 6)
  .replace(/seven/gi, 7)
  .replace(/eight/gi, 8)
  .replace(/nine/gi, 9)
  return parseInt(s);
}
*/
