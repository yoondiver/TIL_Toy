let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.

  //처음 받은 루트 노드를 넣어주기
  let queue = [node];
  let values = [];

  while (queue.length !== 0) {
    let head = queue[0];
    // 선입선출이기때문에 쉬프트를 통해내보내기
    queue.shift();
    values.push(head.value);

    // 노드의 자식들을 큐의 다음순ㄴ번으로 넣기
    head.children.forEach((child) => queue.push(child));
  }
  return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
