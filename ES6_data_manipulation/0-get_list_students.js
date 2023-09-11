export class Student {
  constructor(firstName, id, location) {
    this._firstName = firstName;
    this._id = id;
    this._location = location;
  }
}

export default function getListStudents() {
  const student1 = new Student('Guillaume', 1, 'San Francisco');
  const student2 = new Student('James', 2, 'Columbia');
  const student5 = new Student('Serena', 5, 'San Francisco');

  const students = [student1, student2, student5];
  return students;
}
