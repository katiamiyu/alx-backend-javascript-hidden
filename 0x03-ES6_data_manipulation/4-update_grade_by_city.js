export default function updateStudentGradeByCity(students = [], city = '', newGrades = []) {
  for (const val of students) {
    val.grade = 'N/A';
  }
  const filtered = students.filter((obj) => obj.location === city);
  for (let i = 0; i < filtered.length; i += 1) {
    newGrades.map((newGrades) => {
      const _ = [];
      if (newGrades.studentId === filtered[i].id) {
        filtered[i].grade = newGrades.grade;
      }
      return _;
    });
  }
  return filtered;
}
