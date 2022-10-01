function studentReports(students) {
  // TODO: 여기에 코드를 작성합니다.
  let filtered = students.filter((el) => {
    return el.gender === "female";
  });
  return filtered.map((el) => {
    let sum = el.grades.reduce((acc, cur) => {
      return acc + cur;
    });
    let avg = sum / el.grades.length;
  });
}
