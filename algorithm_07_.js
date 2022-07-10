function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.

  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  };
  //1. 조합의 배열을 먼저 구하고
  const resultArr = getCombinations(cards, 3);

  //2. 그 배열의 요소 합으로 모두 변경하고 소수인지 아닌지 판별
  let count = 0;
  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i].reduce((acc, cur) => acc + cur, 0);
    if (isPrime(resultArr[i])) {
      count++;
    }
  }
  return count;
  //소수인지 아닌지 판별하는 함수
  function isPrime(num) {
    let result = false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        result = false;
        break;
      } else result = true;
    }
    return result;
  }

  // const isPrime = (num) => {
  //   for(let i = 2; i < num / 2; i++){
  //     if(num % 1 === 0) return false;
  //   }
  //   return true;
  // }

  // const com = (array = cards, num, temp = []) => {
  //   if(num === 0){
  //     let check = temp.reduce((acc, cur) => acc + cur, 0);
  //     if(isPrime(check)){
  //       results.push(temp)
  //       return;
  //     }
  //   }

  //   array.forEach((el, idx, arr) => {
  //     newArr = arr.slice(idx + 1);
  //     com(newArr, num - 1, temp.concat(el))
  //   })
  // }

  // com ()
  // return results.length
}
