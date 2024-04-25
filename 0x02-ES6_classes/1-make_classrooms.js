import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const classrooms = [];
  [19, 20, 34].forEach((item) => {
    const newClass = new ClassRoom(item);
    classrooms.push(newClass);
  });
  return classrooms;
}
