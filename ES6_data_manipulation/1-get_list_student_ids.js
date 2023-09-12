export default function getListStudentsIds(studList) {
  let IdList = [];
  if (Array.isArray(studList)) {
    let IdList = studList.map((s) => s.id);
  }
  return IdList;
}
