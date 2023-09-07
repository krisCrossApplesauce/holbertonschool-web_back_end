export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set setName(name) {
    this._name = name;
  }

  set setLength(length) {
    this._length = length;
  }

  set setStudents(students) {
    this._students = students;
  }

  get getName() {
    return this._name;
  }

  get getLength() {
    return this._length;
  }

  get getStudents() {
    return this._students;
  }
}
