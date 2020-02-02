const reading = { customer: "ivan", quantity: 10, month: 6, year: 2017 };

const round = num => Math.round(num * 100) / 100;
export const baseRate = (year, month) => 1 + round((((year - month) / 2000) - 1) * 10);

// const aReading = acquireReading();
// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;