/**
 * 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 */

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const col = Number(n[0]),
    row = Number(n[1]);
  const str = `${"*".repeat(col)}\n`.repeat(row);
  console.log(str);
});
