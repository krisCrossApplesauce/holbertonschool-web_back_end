export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else if (typeof students !== 'object') {
      throw TypeError('Students must be an array');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  set setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  set setLength(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = length;
    }
  }

  set setStudents(students) {
    if (typeof students !== 'object') {
      throw TypeError('Students must be an array');
    } else {
      this._students = students;
    }
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
