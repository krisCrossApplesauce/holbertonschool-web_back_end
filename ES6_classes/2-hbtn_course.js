export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  set setStudents(students) {
    if (Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
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
