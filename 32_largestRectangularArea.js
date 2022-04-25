const largestRectangularArea = function (histogram) {
  // // TODO: 여기에 코드를 작성합니다.
  // let largest = 0;
  // // 모든 연속된 부분 히스토그램을 고려해서
  // // 밑변 길이를 부분 히스토그램의 길이로, 높이는 가장 낮은 막대의 높이
  // for (let left = 0; left < histogram.length; left++){
  //   // 길이가 1인 막대로 만들 수 있는 직사각형의 넓이는 막대의 높이와 같
  //   let min = histogram[left];
  //   for (let right = left; right < histogram.length; right++){
  //     // 왼부터 오까지의 히스토그램의 막대중 가장 낮은 막대의 높이를 구한다
  //     if(histogram[right] < min) min = histogram[right];
  //     // 해당 구간(왼~오)의 막대를 전부 포함해서 만들 수 있는 직사각형의 넓이를 구한다
  //     let area = min * (right - left + 1);
  //     // 매번 구한 면적을 기존의 면적과 비교해서 갱신 ㄱㄱ
  //     if(area > largest) largest = area;
  //   }
  // }
  // return largest;

  const createMinIdxTree = (arr, ts, te) => {
    // 가장 작은값의 인덱스를 구하기 위한 구간트리
    if (ts === te) return { idx: ts, val: arr[ts] };

    const mid = parseInt((ts + te) / 2);
    const left = createMinIdxTree(arr, ts, mid);
    const right = createMinIdxTree(arr, mid + 1, te);

    return {
      val: Math.min(left.val, right.val),
      idx: left.val < right.val ? left.idx : right.idx,
      left,
      right,
    };
  };
  const tree = createMinIdxTree(histogram, 0, histogram.length - 1);

  const getMinIdx = (ts, te, rs, re, tree) => {
    if (rs <= ts && te <= re) return tree.idx;
    if (te <= rs || re < ts) return rs;

    const mid = parseInt((ts + te) / 2);
    const left = getMinIdx(ts, mid, rs, re, tree.left);
    const right = getMinIdx(mid + 1, te, rs, re, tree.right);
    return histogram[left] < histogram[right] ? left : right;
  };

  const getRangeArea = (start, end) => {
    if (start > end) return 0;
    // 현재 구간에서 가장 작은 막대 찾기
    // 가장 작은 막대찾으면 구간의 길이 * 높이만큼 직사각형 만들기
    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);

    // 가장 작은 막대를 기준으로 왼, 오 부분에 존재하는 막대의 높이가 더큼
    // 재귀로 왼,오부분
    // 해당 구간에서 가장 작은 막대를 제외해서 만들 수 있는 가장 큰 직사각형의 넓이 구하기
    return Math.max(
      (end - start + 1) * histogram[minIdx],
      getRangeArea(start, minIdx - 1),
      getRangeArea(minIdx + 1, end)
    );
  };

  return getRangeArea(0, histogram.length - 1);
};
