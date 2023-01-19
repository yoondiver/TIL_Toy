// 피자 나눠먹기2
/**
 *
 */

function solution(n) {
  let piece = 6;

  while (true) {
    // 나눠서 떨어지면 멈추고
    if (piece % n === 0) {
      break;
    }
    // 안떨어지면 한판(6피스) 추가
    piece += 6;
  }
  return piece / 6;
}
