function checkEvenOrNot(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.map(function (el) {
    if (el % 2 === 0 && el !== 0) return "ok";
    return "no";
  });
}
