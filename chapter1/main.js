const plays = require('./plays.json');
const invoices = require('./invoices.json');

function amountFor(perf, play) {
  let thisAmount = 0;

  switch (play.type) {
    case 'tragedy':
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;
    case 'comedy':
      thisAmount = 30000;
      if (perf.audience > 20) {
        thisAmount += 1000 + 500 * (perf.audience - 20);
      }
      this.Amount += 300 + perf.audience;
      break;
    default:
      throw new Error(`unknown type: ${play.type}`);
  }

  return thisAmount;
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `${invoice.customer} の支払い\n`;

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minumFractionDigits: 2
  });

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(perf, play);

    // ボリューム特典のポイントを換算
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 喜劇のときは10人につき、さらにポイントを加算
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 注文の内訳を出力
    result += ` ${play.name}: ${price.format(thisAmount / 100)} (${
      perf.audience
    }席) \n`;
    totalAmount += thisAmount;
  }

  result += `支払額は${price.format(totalAmount / 100)}\n`;
  result += `次回使える特典は${volumeCredits}ポイント\n`;
  return result;
}

// テストコード
const expected = `BigCo の支払い
 Hamlet: $650.00 (55席) 
 As You Like It: $385.00 (35席) 
 Othello: $500.00 (40席) 
支払額は$1,535.00
次回使える特典は47ポイント
`;

const status = expected == statement(invoices[0], plays);
const message = status ? '✔ : OK' : '✖ : ERROR!!';
console.log(message);

if (!status) console.log(statement(invoices[0], plays));
if (!status) console.log(expected);
