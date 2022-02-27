const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let open1 = "(";
  let close1 = ")";
  let open2 = "{";
  let close2 = "}";
  let open3 = "[";
  let close3 = "]";
  let stack = [];

  let arr = str.split("");
  // let openNum = 0;
  // let closeNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === open1) {
      stack.push(str[i]);
    }
    if (arr[i] === close1) {
      const target = stack.pop();
      if (target !== open1) {
        return false;
      }
    }

    if (arr[i] === open2) {
      stack.push(str[i]);
    }
    if (arr[i] === close2) {
      const target = stack.pop();
      if (target !== open2) {
        return false;
      }
    }

    if (arr[i] === open3) {
      stack.push(str[i]);
    }
    if (arr[i] === close3) {
      const target = stack.pop();
      if (target !== open3) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
