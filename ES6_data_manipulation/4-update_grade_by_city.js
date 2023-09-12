export default function updateStudentGradeByCity(studList, city, newGrades) {
  const studsInCity = studList.filter((s) => s.location === city);
  for (s of studsInCity) {
    for (g of newGrades) {
      if (s.id === g.studentId) {
        s.grade = g.grade;
      }
    }
    if (!s.grade) {
      s.grade = 'N/A';
    }
  }
}
