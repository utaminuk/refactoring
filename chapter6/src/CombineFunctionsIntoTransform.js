export const rawReading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function baseRate(month, year) {
  return 1 + this.round((((year - month) / 2000) - 1) * 10);
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}


const aReading = aquireReading();
// 基本料金
const baseCharge = calculateBaseCharge(aReading);

// 課税対象額
const taxableCharge = Math.max(0, calculateBaseCharge(aReading) - taxThreshhold(aReading.year));
