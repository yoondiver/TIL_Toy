function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.

  if (giftBox.length === 0 || wish === "") {
    return false;
  }

  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    }
    if (Array.isArray(giftBox[i])) {
      if (unpackGiftbox(giftBox[i])) {
        return true;
      }
    }
  }
  return false;
}
