export default function cleanSet(set, startString) {
  let str = '';
  const cleanSet = [...set]
    .filter((x) => x)
    .filter((x) => x.startsWith(startString))
    .map((x) => x.substring(startString.length));
  for (const x of cleanSet) {
    if (str !== '') {
      str.append('-');
    }
    str.append(x);
  }

  return str;
}
