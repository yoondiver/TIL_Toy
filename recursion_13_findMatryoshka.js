function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  if (matryoshka.size === size) {
    return true;
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }
  // 마트료시카가 있고, 사이즈가 같다면, 그 사이즈 리턴

  // 없으면 false
  else {
    return false;
  }
}
