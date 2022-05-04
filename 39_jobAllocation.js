const jobAllocation = function (jobs, workersNum) {
  // TODO: 여기에 코드를 작성합니다.

  // memo i j는 i번째 worker가 j번째 job부터 작업한다고 할때
  // 최대 작업량이 최소가 되는 분배에서의 최대 작업량을 저장
  // i, j모두 인덱스이므로 0부터 시작
  const memo = [];
  for (let i = 0; i < workersNum; i++) memo.push(Array(jobs.length).fill(-1));
  // 마지막 작업자는 남아있는 모든 작업을다 해야하므로 쉽게 계산이 가능
  // 마지막 작업자는 최대 나머지 작업자의 수만큼을 제외한 일만 할 수 있따
  let workload = 0;

  for (let i = jobs.length - 1; i >= workersNum - 1; i--) {
    workload = workload + jobs[i];
    memo[workersNum - 1][i] = workload;
  }

  const aux = (workerIdx, jobIdx, jobs, left) => {
    // 이미 계산한 적이 있는 경우, 다시 풀지 않음.
    // 마지막 작업자의 작업량을 전부 계산했으므로, 탈출 조건을 굳이 작성하지 않안도 됨
    if (memo[workerIdx][jobIdx] !== -1) return memo[workerIdx][jobIdx];

    let workload = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = jobIdx; i < jobs.length - left; i++) {
      workload = workload + jobs[i];
      //가장 많이 일하는 사람의 작업량을 구한다
      const hardest = Math.max(
        workload,
        aux(workerIdx + 1, i + 1, jobs, left - 1)
      );
      // 그 작업량이 최소화되는 분배에서 최대 작업량을 구한다
      min = Math.min(min, hardest);
    }
    memo[workerIdx][jobIdx] = min;
    return min;
  };

  return aux(0, 0, jobs, workersNum - 1);
};
