function calculateScore(records, value) {
  // TODO: Your code here!
  let sum = records.reduce((acc, cur) => {
    if (cur.animal === value) return acc + cur.score;
    else return acc;
  }, 0);
  return sum;
}
