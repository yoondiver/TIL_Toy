function calculateScore(records, value) {
  // TODO: Your code here!
  let sum = records.reduce((acc, cur) => {
    if (cur.animal === value) return acc + cur.score;
  }, 0);
}
