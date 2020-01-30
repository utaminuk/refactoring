export function amountInvoiced(startDate, endDate) {
  return (endDate - startDate) * 10;
}
export function amountReceived(startDate, endDate) {
  return (endDate - startDate) * 20;
}
export function amountOverdue(startDate, endDate) {
  return (endDate - startDate) * 30;
}