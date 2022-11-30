function daysInMonth(month) {
  // TODO: 여기에 코드를 작성합니다.

  // 2월은 28일
  if (month === 2) {
    return 28;
  }

  // 1,3,5,7,8,10,12 = 31
  else if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  }

  // 나머지 30
  else return 30;
}
