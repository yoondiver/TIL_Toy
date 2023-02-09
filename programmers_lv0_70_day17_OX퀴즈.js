// ox퀴즈

/**
 * 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는
 * 문자열 배열 quiz가 매개변수로 주어집니다.
 * 수식이 옳다면 "O"를, 틀리다면 "X"를 순서대로 담은 배열을
 * return하도록 solution 함수를 완성해주세요.
 */

function solution(quiz) {
  let answer = [];
  quiz.map(function (q) {
    let sol = q.split("=");
    eval(sol[0]) === Number(sol[1]) ? answer.push("O") : answer.push("X");
  });
  return answer;
}

/**
 * function solution(quiz) {
    let answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
  }
 */
