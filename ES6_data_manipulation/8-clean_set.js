export default function cleanSet(set, startString) {
  if (!startString || startString.length < 1) return '';
  const cleanSet = [...set]
    .filter((x) => x)
    .filter((x) => x.startsWith(startString))
    .map((x) => x.substring(startString.length))
    .join('-');

  return cleanSet;
}
