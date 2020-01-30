export function amountInvoiced(startDate, endDate) {
  return (startDate - endDate) * 10;
}
export function amountReceived(startDate, endDate) {
  return (startDate - endDate) * 20;
}
export function amountOverdue(startDate, endDate) {
  return (startDate - endDate) * 30;
}