// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);

  // 현재위치
  let curIdx = heap.length - 1;

  // 부모위치
  let pIdx = getParentIdx(curIdx);

  // 부모의 값이 유효하고 부모의 값보다 자식의 값이 클때
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    // 부모값 자식값 스왚
    swap(curIdx, pIdx, heap);
    // 현재 위치를 부모의 위치로 바꾼다.
    curIdx = pIdx;
    //부모의 위치는 다시 자식의 위치
    pIdx = getParentIdx(curIdx);
  }

  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
