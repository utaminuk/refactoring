export const acquireReading = () => ({ customer: "ivan", quantity: 10, month: 6, year: 2017 });
const round = num => Math.round(num * 100) / 100;
export const baseRate = (month, year) => 1 + round((((year - month) / 2000) - 1) * 10);

// 実コード
const aReading = acquireReading();
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
