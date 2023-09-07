export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != string) {
      throw "name needs to be a string";
    } else if (typeof length != int) {
      throw "length needs to be a number";
    } else if (typeof students) {
      throw "students needs to be an array";
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    };
  }

  set setName(name) {
    if (typeof name != string) {
      throw "name needs to be a string";
    } else {
      this._name = name;
    };
  }

  set setLength(length) {
    if (typeof length != int) {
      throw "length needs to be a number";
    } else {
      this._length = length;
    };
  }

  set setStudents(students) {
    if (typeof students) {
      throw "students needs to be an array";
    } else {
      this._students = students;
    };
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