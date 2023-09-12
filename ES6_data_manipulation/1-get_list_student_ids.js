export default function getListStudentsIds(studList) {
  const IdList = studList.map((s) => s.id);
  return IdList;
}
