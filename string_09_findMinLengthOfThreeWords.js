function findMinLengthOfThreeWords(word1, word2, word3) {
  // TODO: 여기에 코드를 작성합니다.

  let shortestword = word1;

  if (word1.length > word2.length) {
    shortestword = word2;

    if (word2.length > word3.length) {
      shortestword = word3;
    }
  } else if (word1.length > word3.length) {
    shortestword = word3;
  }
}
