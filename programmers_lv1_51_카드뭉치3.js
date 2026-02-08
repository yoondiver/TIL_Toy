function solution(cards1, cards2, goal) {
  let stack = [];

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      stack.push(cards1.shift());
    } else if (goal[i] === cards2[0]) {
      stack.push(cards2.shift);
    }
    return "no";
  }
  if (stack.toString()) return "YES";

  return answer;
}
