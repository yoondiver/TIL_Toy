// 소수 확인하는 함수 필요
const isPrime = (num) => {
  if (num % 2 === 0) return false;
  let sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

// 각 자리를 바꿔가면서 소수 판별할 수 있도록 각 숫자의 배열로 만드는 함수와 다시 수로 조합하는 함수
const splitNum = (num) => {
  const digits = num.toString().split("");
  return digits.map((d) => Number(d));
};
const joinNum = (digits) => Number(digits.join(""));

const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.

  if (curPwd === newPwd) return 0;

  // bfs(너비우선탐색)을 진행하기위해 친구인 queue가 필요
  // 확인한 수를 다시 확인하지 않기위한 isChecked변수가 하나 필요할듯?
  // 여기에서는 queue에서 실제로 넣고 빼고를 실행하지 않고 front, rear를 활용하여 queue의 길이를 임의로 활용
  let front = 0;
  let rear = 0;
  const queue = [];

  // front와 rear값이 같으면, queue배열이 0이라고 임의로 활용하는 isEmpty함수필요
  // front와 rear 그리고 queue가 동시에 움직여야 한다는 것을 알 수 있다.
  const isEmpty = (queue) => front === rear;

  // queue의 요소를 enQueue, deQueue해주는 함수필요
  // 먼저 enqueue 함수에는 [필요한동작수, 숫자]로 이뤄진 item인자를 queue에 넣어준다
  const enQueue = (queue, item) => {
    queue.push(item);
    rear++;
    // rear값을 증가시켜 queue에 요소 하나가 들어간 것으로 임의로 표기한다.
  };

  // dequeue 함수에 현재 queue에 front 를 리턴하고 , front 값을 증가시킨다.
  // 나중에 dequeue할 item 이 enqueue에 들어간 item이어야하므로, front 값이 증가되어야한다.
  const deQueue = (queue) => {
    const item = queue[front];
    front++;
    return item;
  };

  // isVisited 배열을 하나만들고 현재 조회하는 수가 이미 조회했던 수인지 판명한다. 최소 동작횟수 구하기위함

  // 4자리 수이니 10000개의 false로 구성된 배열을 만들고, 현재 수 자리에 true를 넣는다.
  const isVisited = Array(10000).fill(false);
  isVisited[curPwd] = true;

  // bfs의 시작점
  // queue에 [필요한 동작수, 비밀번호]
  enQueue(queue, [0, curPwd]);

  // 3-5 bfs가 시작된다. while문 ㄱㄱ
  while (isEmpty(queue) === false) {
    const [step, num] = deQueue(queue); // 큐에 넣어준 item을 각각 step과 num이 되도록 구조분해

    // 3-5-1. 각 자리수마다 변경을 시도할 예정이니 4번 반복
    for (let i = 0; i < 4; i++) {
      // 수를 4개로 분해해주고
      const digits = splitNum(num);

      // 각 자리수의 수를 본인 수 제외하고 모두 바꿪본다 0-9까지
      for (let d = 0; d < 10; d++) {
        if (d !== digits[i]) {
          // 다른수로 바꿔보고
          digits[i] = d;
          // 다시 수로 변경해주고
          const next = joinNum(digits);

          // 만약 새로운 수가 newPwd와 같다면 현재 step에서 1을 증가시키고 반환
          if (next === newPwd) return step + 1;

          // 1000보다 큰소수여야하고, 방문한적이 없어야함
          if (next > 1000 && isPrime(next) && isVisited[next] === false) {
            // 조회했다고 표기
            isVisited[next] = true;
            // 변경횟수, 새로운 수를 queue넣어준다
            enQueue(queue, [step + 1, next]);
          }
        }
      }
    }
  }
  return -1;
};
