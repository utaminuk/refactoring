import plays from './plays.mjs';
import invoices from './invoices.mjs';

import createStatementData from './createStatementData.mjs';

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data, plays) {
  let result = `${data.customer} の支払い\n`;

  for (let perf of data.performances) {
    // 注文の内訳を加算
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}席) \n`;
  }

  result += `支払額は${usd(data.totalAmount)}\n`;
  result += `次回使える特典は${data.totalVolumeCredits}ポイント\n`;
  return result;

  // 価格表示フォーマット関数
  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minumFractionDigits: 2
    }).format(aNumber / 100);
  }
}

// テストコード
const expected = `BigCo の支払い
 Hamlet: $650.00 (55席) 
 As You Like It: $580.00 (35席) 
 Othello: $500.00 (40席) 
支払額は$1,730.00
次回使える特典は47ポイント
`;

const status = expected == statement(invoices[0], plays);
const message = status ? '✔ : OK' : '✖ : ERROR!!';
console.log(message);

if (!status) console.log(statement(invoices[0], plays));
if (!status) console.log(expected);
