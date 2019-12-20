const plays = require('./plays.json');
const invoices = require('./invoices.json');

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.cutomer}\n`;

  console.log(plays);
  console.log(invoices);
}

statement(invoices, plays);
