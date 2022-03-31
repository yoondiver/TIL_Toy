function test1(A, B) {
  // TODO: 여기에 코드를 작성하세요.

  if (A === 1 || B === 1) return 1;

  // let minH = Math.min(A, B);
  // while(true){
  //   if((A * B) % (minH * minH) === 0){
  //     if(minH === A || minH === B){
  //     } else {
  //       break;
  //     }
  //   }
  //   minH--
  // }
  return square(A, B);
}

function square(a, b) {
  if (b === 0) return a;
  else return square(b, a % b);
}
