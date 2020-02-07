export const rawReading = { customer: "ivan", quantity: 10, month: 6, year: 2017 };
const round = num => Math.round(num * 100) / 100;
export const baseRate = (month, year) => 1 + round((((year - month) / 2000) - 1) * 10);

// 実コード
class Reading {
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
}


const aReading = new Reading(rawReading);
const baseCharge = calculateBaseCharge(aReading);

export function calculateBaseCharge(aReading) {
  return round(baseRate(aReading.month, aReading.year) * aReading.quantity);
}

// 過去のコード
// const aReading = acquireReading();
// const baseCharge = calculateBaseCharge(aReading);

// export function calculateBaseCharge(aReading) {
//   return round(baseRate(aReading.month, aReading.year) * aReading.quantity);
// }
