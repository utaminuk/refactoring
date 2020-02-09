export const rawReading = { customer: "ivan", quantity: 10, month: 6, year: 2017 };

// 実コード
export class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() { return this._customer; }
  get quantity() { return this._quantity; }
  get month() { return this._month; }
  get year() { return this._year; }

  baseRate(month, year) {
    return 1 + this.round((((year - month) / 2000) - 1) * 10);
  }

  round(num) {
    return Math.round(num * 100) / 100;
  }

  taxThreshold(year) {
    return year % 2000;
  }

  get baseCharge() {
    return this.round(this.baseRate(this.month, this.year) * this.quantity);
  }
}


const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;
const textableCharge = Math.max(0, aReading.baseCharge - aReading.taxThreshold(aReading.year))



// 過去のコード
// const aReading = acquireReading();
// const baseCharge = calculateBaseCharge(aReading);

// export function calculateBaseCharge(aReading) {
//   return round(baseRate(aReading.month, aReading.year) * aReading.quantity);
// }

export default Reading;
