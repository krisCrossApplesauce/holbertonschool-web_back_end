export default function getListStudentsIds(studList) {
  if (!Array.isArray(studList)) {
    return [];
  }
  const IdList = studList.map((s) => s.id);
  return IdList;
}
