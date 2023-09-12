export default function getStudentsByLocation(studList, city) {
  const studsInCity = studList.filter((stud) => {
    if (stud.location == city) {
      return stud;
    }
  });
}
