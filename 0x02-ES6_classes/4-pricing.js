import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !(currency instanceof Currency)) {
      throw new TypeError('invalid input detected');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Invalid type');
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(curObj) {
    if (!(curObj instanceof Currency)) {
      throw new TypeError('Invalid Input');
    }
    this._currency = curObj;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Invalid Entry Detected');
    }
    return amount * conversionRate;
  }
}
