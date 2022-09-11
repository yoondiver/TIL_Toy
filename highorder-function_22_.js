function classicMovies(arr, year) {
  // TODO: 여기에 코드를 작성합니다.
  const result = arr.filter(function (movie) {
    return movie.year < year;
  });
}
