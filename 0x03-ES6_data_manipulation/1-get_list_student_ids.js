export default function getListStudentIds(listArg = []) {
  let aList = [];
  if (listArg instanceof Array) {
    aList = listArg.map((val) => val.id);
  }
  return aList;
}
