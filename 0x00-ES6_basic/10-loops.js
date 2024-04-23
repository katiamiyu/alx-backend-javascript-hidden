export default function appendToEachArrayValue(array, appendString) {
  const arrayN = [];
  for (let value of array) {
    value = appendString + value;
    arrayN.push(value);
  }

  return arrayN;
}
