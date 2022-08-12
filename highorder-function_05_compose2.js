function compose2(func1, func2) {
  // TODO: 여기에 코드를 작성합니다.
  return function (num) {
    return func1(func2(num));
  };
}
