function amountInvoiced(startDate, endDate) {
  return (startDate - endDate) * 10;
}
function amountReceived(startDate, endDate) {
  return (startDate - endDate) * 20;
}
function amountOverdue(startDate, endDate) {
  return (startDate - endDate) * 30;
}