export function amountInvoiced(aDateRange) {
  return (aDateRange.endDate - aDateRange.startDate) * 10;
}
export function amountReceived(startDate, endDate) {
  return (endDate - startDate) * 20;
}
export function amountOverdue(startDate, endDate) {
  return (endDate - startDate) * 30;
}