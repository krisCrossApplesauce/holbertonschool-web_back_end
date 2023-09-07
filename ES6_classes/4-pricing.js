import Currency from './3-currency'

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!Currency.isInstance(currency)) {
      throw new TypeError('Currency must be a currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    returns `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!Currency.isInstance(value)) {
      throw new TypeError('Currency must be a currency');
    }
    this._currency = value;
  }
}
