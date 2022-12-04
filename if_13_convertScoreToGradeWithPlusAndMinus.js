function convertScoreToGradeWithPlusAndMinus(score) {
  // TODO: 여기에 코드를 작성합니다.
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  } else if (score > 98) {
    return "A+";
  } else if (score >= 93 && score <= 97) {
    return "A";
  } else if (score >= 90 && score <= 92) {
    return "A-";
  }
}
