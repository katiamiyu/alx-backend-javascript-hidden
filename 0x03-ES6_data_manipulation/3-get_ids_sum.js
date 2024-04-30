export default function getStudentIdsSum(students = []) {
  return students.reduce((sum, curVal) => sum + curVal.id, 0);
}
