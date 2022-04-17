// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Number.parseInt((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);
  let childIdx = heap.length - 1;
  let parentIdx = getParentIdx(childIdx);

  // binaryHeap에서 부등호만 바꿔줬다.
  while (parentIdx >= 0 && heap[parentIdx] > heap[childIdx]) {
    swap(parentIdx, childIdx, heap);
    childIdx = parentIdx;
    parentIdx = getParentIdx(childIdx);
  }
  return heap;
}

function removeRoot(heap) {
  // 가장 마지막 노드와 root를 교환한 후, 배열 길이를 줄여준 다음 최소 힙 구현을 해준다.
  swap(0, heap.length - 1, heap); // 가장 마지막 노드와 root 교환
  heap.pop(); // 배열 길이 1만큼 축소
  if (heap.length === 0) return [];

  let curIdx; // root부터 아래로 내려가면서 확인할 예정
  let parentIdx = 0; // root idx
  while (curIdx !== parentIdx) {
    curIdx = parentIdx; // root부터 시작!
    let leftChild = curIdx * 2 + 1;
    let rightChild = curIdx * 2 + 2;
    if (leftChild < heap.length && heap[leftChild] < heap[parentIdx]) {
      parentIdx = leftChild; // 자식보다 부모가 크면 최소 힙 구현을 위해 자식, 부모 인덱스에 자녀 인덱스 할당 후 swap 진행
    }
    if (rightChild < heap.length && heap[rightChild] < heap[parentIdx]) {
      parentIdx = rightChild;
    }
    swap(curIdx, parentIdx, heap);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  const result = [];
  // 큐처럼 활용하는구나
  while (minHeap.length > 0) {
    result.push(minHeap[0]); // 최소힙의 root 값을 넣어주고 다시 최소힙 구현
    minHeap = removeRoot(minHeap);
  }
  return result;
};
