function computeWhenDouble(interestRate) {
  // 원금

  // 더해지는 값
  let rate = 1 + interestRate / 100;
  let principal = 1;
  let year = 0;
  while (principal < 2) {
    principal = principal * rate;
    year++;
  }
  return year;
}

// 값을 받고, 그걸 매달 곱한 값을 지정한 함수에 넣어주고

// 만약 그 값이 원금의 값과 같거나 초과하면 리턴

// if 원금 금액이 2배가 되거나 초과한 값이 12이상이면 나누기 12

// 12이하이면 그대로 리턴
