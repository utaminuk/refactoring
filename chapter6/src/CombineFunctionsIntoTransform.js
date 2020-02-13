export const rawReading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function baseRate(month, year) {
  return 1 + this.round((((year - month) / 2000) - 1) * 10);
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function enrichReading(original) {
  const result = Object.create(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

const rawReading = aquireReading();
const aReading = enrichReading(rawReading);

// 基本料金
const baseCharge = aReading.baseCharge;

// 課税対象額
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshhold(aReading.year));
