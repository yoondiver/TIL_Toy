function numberSearch(str) {
  const digits = "0123456789";

  if (str === "") {
    return 0;
  }

  let sum = 0;
  let pureStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      sum = sum + Number(str[i]);
    } else if (str[i] !== " ") {
      pureStr = pureStr + str[i];
    }
  }

  return Math.round(sum / pureStr.length);
}
