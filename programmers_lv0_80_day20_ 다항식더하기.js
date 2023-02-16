// 다항식 더하기

/**
 * 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
 */

function solution(polynomial) {
  polynomial = polynomial.split(" + ");
  let x = 0;
  let n = 0;
  polynomial.map((t) => {
    if (t.indexOf("x") > -1) {
      x += Number(t.substr(0, t.length - 1)) || 1;
    } else {
      n += Number(t);
    }
  });
  var answer = [];
  if (x) {
    answer.push(x === 1 ? "x" : x + "x"); // 😁 1x에서 1을 생략해주는 과정!!!
  }
  if (n) {
    answer.push(n);
  }
  return answer.join(" + ");
}

/**
 * function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}
 */

/**
 * function solution(p) {
    var [x, c] = p.split('+').reduce(([a,b],s) => {
        if (s.includes('x')) {
            return [a + Number(s.trim().replace('x','') || 1), b];
        }
        return [a, b + Number(s)];
    }, [0, 0]);

    if (!x && !c) return '0';
    if (!x) return c.toString();
    x = `${x==1?'':x}x`;
    if (!c) return x;
    return `${x} + ${c}`;
}
 */
