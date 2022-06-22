function readVertically(arr) {
  // code goes here
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxLength < arr[i].length) {
      maxLength = arr[i].length;
    }
  }

  let result = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === undefined) {
        continue;
      }
      result += arr[j][i];
    }
  }
  return result;
}
