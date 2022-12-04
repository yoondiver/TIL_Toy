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
  } else if (score >= 88 && score <= 89) {
    return "B+";
  } else if (score >= 83 && score <= 87) {
    return "B";
  } else if (score >= 80 && score <= 82) {
    return "B-";
  } else if (score >= 78 && score <= 79) {
    return "C+";
  } else if (score >= 73 && score <= 77) {
    return "C";
  } else if (score >= 70 && score <= 72) {
    return "C-";
  }
}
