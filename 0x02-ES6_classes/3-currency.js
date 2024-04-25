export default class Currency {
  constructor(code, name) {
    if (typeof (name) !== 'string' || typeof (code) !== 'string') {
      throw new Error(TypeError('invalid type detected'));
    }

    this._name = name;
    this._code = code;
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

  get code() {
    return this._code;
  }

  set code(newval) {
    if (typeof newval !== 'string') {
      throw TypeError('Name must be a String');
    }
    this._code = newval;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
