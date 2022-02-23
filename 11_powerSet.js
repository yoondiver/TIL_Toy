const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.

  // 쪼개서 정렬
  let sortedStrArr = str.split("").sort();

  //정렬한 문자열 배열중 중복걸러내기
  let dedup = sortedStrArr.reduce((acc, curr) => {
    if (acc.indexOf(curr) < 0) {
      acc.push(curr);
    }

    return acc;
  }, []);

  let result = [];
  let find = (idx, subset) => {
    // 재귀리턴, ded 전부검토
    if (idx === dedup.length) {
      result.push(subset);
      return;
    }

    // 처음 문자열 없을때와, 재귀포인트
    find(idx + 1, subset);
    //포인트 부분을 ㅣ준으로 문자열 원소를 하나씩 추가
    find(idx + 1, subset + dedup[idx]);
  };

  find(0, "");

  return result.sort();
};
