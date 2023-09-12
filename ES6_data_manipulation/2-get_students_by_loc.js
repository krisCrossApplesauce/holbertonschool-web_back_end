export default function getStudentsByLocation(studList, city) {
  const studsInCity = studList.filter((s) => {
    if (s.location === city) {
      return s;
    }
  });

  return studsInCity;
}
