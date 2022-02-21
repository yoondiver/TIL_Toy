let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  // 재귀?
  // node value푸쉬 후 재귀
  // 노드칠드런없다면 노드벨류 푸쉬

  const crashDfs = (node) => {
    result.push(node.value);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        crashDfs(node.children[i]);
      }
    }
  };

  crashDfs(node);
  return result;
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
