function isFalsy(anything) {
  // TODO: 여기에 코드를 작성합니다.

  if (isNaN(anything)) {
    return true;
  }

  if (
    anything !== 0 &&
    anything !== false &&
    anything !== undefined &&
    anything !== "" &&
    anything !== null
  ) {
    return false;
  } else return true;
}
