export default function getStudentIdsSum(studList) {
  return studList.reduce((total, stud) => total + stud.id, 0);
}
