export default function updateStudentGradeByCity(studList, city, newGrades) {
  const studsInCity = studList.filter((s) => s.location === city).map((stud) => {
    const maybeGrade = newGrades.find((item) => item.studentId === stud.id);
    const grade = maybeGrade ? maybeGrade.grade : 'N/A';
    return { ...stud, grade };
  });

  return studsInCity;
}
