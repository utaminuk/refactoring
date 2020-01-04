import createStatementData from './createStatementData.mjs';

export function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

export function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

// 価格表示フォーマット関数
function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minumFractionDigits: 2
  }).format(aNumber / 100);
}

// プレーンテキストフォーマット出力
function renderPlainText(data) {
  let result = `${data.customer} の支払い\n`;

  for (let perf of data.performances) {
    // 注文の内訳を加算
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}席) \n`;
  }

  result += `支払額は${usd(data.totalAmount)}\n`;
  result += `次回使える特典は${data.totalVolumeCredits}ポイント\n`;
  return result;
}

// HTMLフォーマット出力
function renderHtml(data) {
  let result = `<h1>${data.customer} の支払い</h1>\n`;

  result += '<table>\n';
  result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>\n';

  for (let perf of data.performances) {
    // 注文の内訳を加算
    result += `<tr><td>${perf.play.name}</td><td>${usd(perf.amount)}</td><td>${
      perf.audience
    }</td></tr>\n`;
  }
  result += '</table>\n';

  result += `<p>支払額は${usd(data.totalAmount)}</p>\n`;
  result += `<p>次回使える特典は${data.totalVolumeCredits}ポイント</p>\n`;
  return result;
}
