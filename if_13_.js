function convertScoreToGrade(score) {
  // TODO: 여기에 코드를 작성합니다.

  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  }
}
