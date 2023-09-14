export default function updateUniqueItems(map) {
  if (!Map.isMap(map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  map.forEach((key, value) => {
    if (value === 1) {
      updatedMap.set(key) = 100;
    } else {
      updatedMap.set(key) = value;
    }
  });

  return updatedMap;
}
