let longestPalindrome = function (str) {
  // // TODO: 여기에 코드를 작성합니다.
  // // 길이값을 저장할 변수를 선언
  // let palLen = 0;
  // // 문자열의 길이가 1 이하인 경우는 그대로 리턴
  // if (str.length <= 1) return str.length;
  // // 부분문자열을 만들어서 저장할 배열을 선언
  // let subStr = [];
  // // 이 부분이 계산 범위를 넘어가는 듯(콜스텍 초과)
  // // 짧은 문장의 경우는 계산이 잘 되는 것은 확인
  // // 반복문으로 부분문자열을 모두 저장한다
  // for (let i = 0; i < str.length; i++) {
  //   let curStr = '';
  //   curStr = curStr + str[i];
  //   subStr.push(curStr);
  //   for (let j = i + 1; j < str.length; j++) {
  //     curStr = curStr + str[j];
  //     subStr.push(curStr);
  //   }
  // }
  // // 반복문으로 역순의 부분문자열을 만들고, 만든 문자열이 배열에 있는지 체크
  // // 배열에 있다면, 그 길이가 저장한 길이값보다 길다면 갱신하도록
  // for (let k = str.length - 1; k >= 0; k--) {
  //   let revStr = '';
  //   revStr = revStr + str[k];
  //   if (subStr.includes(revStr) && revStr.length > palLen) {
  //     palLen = revStr.length;
  //   }
  //   for (let l = k - 1; l >= 0; l--) {
  //     revStr = revStr + str[l];
  //     if (subStr.includes(revStr) && revStr.length > palLen) {
  //       palLen = revStr.length;
  //     }
  //   }
  // }
  // return palLen;

  if (str.length < 2) return str.length;

  const LENGTH = str.length;
  const isPalindrome = Array(LENGTH)
    .fill(false)
    .map((_) => Array(LENGTH).fill(false));
  // 언더바는 잘못된 코드가 아님
  // 언더바는 어떤 매개변수는 전달되어도 무시하겠다는 의미로 사용됨

  let maxLen = 1;
  // 길이가 1인 회문
  for (let i = 0; i < LENGTH; i++) isPalindrome[i][i] = true;

  // 길이가 2인 회문
  for (let i = 0; i < LENGTH - 1; i++) {
    if (str[i] === str[i + 1]) {
      isPalindrome[i][i + 1] = true;
      maxLen = 2;
    }
  }

  // 길이가 3이상인 회문
  for (let len = 3; len <= LENGTH; len++) {
    for (let startIdx = 0; startIdx <= LENGTH - len; startIdx++) {
      const endIdx = startIdx + len - 1;
      if (
        isPalindrome[startIdx + 1][endIdx - 1] === true &&
        str[startIdx] === str[endIdx]
      ) {
        isPalindrome[startIdx][endIdx] = true;
        maxLen = len;
      }
    }
  }

  return maxLen;
};
