export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('name needs to be a string');
    } else if (typeof length !== 'number') {
      throw new Error('length needs to be a number');
    } else if (typeof students !== 'object') {
      throw new Error('students needs to be an array');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  set setName(value) {
    if (typeof value !== 'string') {
      throw new Error('name needs to be a string');
    } else {
      this._name = value;
    }
  }

  set setLength(value) {
    if (typeof value !== 'number') {
      throw new Error('length needs to be a number');
    } else {
      this._length = value;
    }
  }

  set setStudents(value) {
    if (typeof value !== 'object') {
      throw new Error('students needs to be an array');
    } else {
      this._students = value;
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
