function callbackOnly(callback, response) {
  // TODO: 여기에 코드를 작성합니다.
  if (response.status !== "fail") {
    return callback(response.data);
  } else {
    return "Something went wrong!";
  }
}
