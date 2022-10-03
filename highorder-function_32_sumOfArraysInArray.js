function sumOfArraysInArray(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let flatted = arr.flat();
  let numArr = flatted.filter((el) => {
    return typeof el === "number";
  });
}
