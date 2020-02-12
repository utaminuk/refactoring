export const rawReading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function baseRate(month, year) {
  return 1 + this.round((((year - month) / 2000) - 1) * 10);
}


const aReading = aquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
