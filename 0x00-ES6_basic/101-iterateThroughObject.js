export default function iterateThroughObject(reportWithIterator) {
  let returnVal = '';
  for (let v = 0; v < reportWithIterator.length; v += 1) {
    if (v + 1 === reportWithIterator.length) {
      returnVal += `${reportWithIterator[v]}`;
    } else {
      returnVal += `${reportWithIterator[v]} | `;
    }
  }
  return returnVal;
}
