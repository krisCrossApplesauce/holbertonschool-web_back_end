export class Student {
  constructor(id, firstName, location) {
    this._id = id;
    this._firstName = firstName;
    this._location = location;
  }
}

export default function getListStudents() {
  const student1 = new Student(1, 'Guillaume', 'San Francisco');
  const student2 = new Student(2, 'James', 'Columbia');
  const student5 = new Student(5, 'Serena', 'San Francisco');

  const students = [student1, student2, student5];
  return students;
}
