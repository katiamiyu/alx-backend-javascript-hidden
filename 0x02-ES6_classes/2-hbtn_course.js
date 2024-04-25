export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string' || typeof (length) !== 'number' || !Array.isArray(students)) {
      throw new Error(TypeError('invalid type detected'));
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newval) {
    if (typeof newval !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newval;
  }

  get length() {
    return this._length;
  }

  set length(newval) {
    if (typeof newval !== 'number') {
      throw TypeError('Name must be a Number');
    }
    this._length = newval;
  }

  get students() {
    return this._students;
  }

  set students(newval) {
    if (!Array.isArray(newval)) {
      throw TypeError('Name must be an Array');
    }
    this._students = newval;
  }
}
