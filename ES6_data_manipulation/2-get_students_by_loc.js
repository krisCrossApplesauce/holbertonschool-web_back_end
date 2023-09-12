export default function getStudentsByLocation(studList, city) {
  return studList.filter((s) => s.location === city);
}
