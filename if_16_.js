function addOneSecond(hour, minute, second) {
  // TODO: 여기에 코드를 작성합니다.

  if (hour !== 23 && minute !== 59 && second !== 59) {
    second = second + 1;
    return "1초 뒤에 " + hour + "시 " + minute + "분 " + second + "초 입니다";
  } else if ((hour !== 23) & (minute !== 59) && second === 59) {
    minute = minute + 1;
    return "1초 뒤에 " + hour + "시 " + minute + "분 0초 입니다";
  }
}
