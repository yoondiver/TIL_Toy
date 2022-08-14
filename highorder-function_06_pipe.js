function pipe(...funcs) {
  // TODO: 여기에 코드를 작성합니다.
  return function (num) {
    let result = num;
    for (let i = 0; i < funcs.length; i++) {
      result = funcs[i](result);
    }
    return result;
  };
}
