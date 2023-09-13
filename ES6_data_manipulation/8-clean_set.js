export default function cleanSet(set, startString) {
  let str = '';
  const arr = Array.from(set)
    .filter((x) => x.startsWith(startString))
    .map((x) => x.substring(startString));
  for (const x of arr) {
    if (str !== '') {
      str.append('-');
    }
    str.append(x);
  }

  return str;
}
