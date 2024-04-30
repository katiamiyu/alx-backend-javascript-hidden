export default function getStudentsByLocation(students = [], city) {
  const values = students.filter((val) => val.location === city);
  return values;
}
