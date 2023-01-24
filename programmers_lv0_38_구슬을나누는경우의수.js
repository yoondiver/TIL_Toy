// 구슬을 나누는 경우의 수
/**
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
 * 구슬은 모두 다르게 생겼습니다.
 * 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
 * balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 */

function solution(balls, share) {
  function factorial(n) {
    let fac = 1n;
    for (let i = 1; i <= n; i++) {
      fac *= BigInt(i);
    }
    return fac;
  }
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

/**
 * function solution(balls, share) {
    var result = 1;
    while(share > 0){
        result = result * balls / share;
        balls = balls - 1;
        share = share - 1;
    }
    return Math.round(result);
  }
 */

/**
 *
 * const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)
 * function solution(balls, share) {
 *  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
 * }
 */
