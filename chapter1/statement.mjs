import createStatementData from './createStatementData.mjs';

export function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

// 価格表示フォーマット関数
function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minumFractionDigits: 2
  }).format(aNumber / 100);
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
}
