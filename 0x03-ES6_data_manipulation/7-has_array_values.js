export default function hasValuesFromArray(set = new Set(), arrLength) {
  const iSize = set.size;
  for (const itm of arrLength) {
    set.add(itm);
  }
  if (iSize === set.size) {
    return true;
  }
  return false;
}
