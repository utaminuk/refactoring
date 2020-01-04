const plays = require('./plays.json');
const invoices = require('./invoices.json');

function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances;
  return renderPlainText(statementData, plays);
}
function renderPlainText(data, plays) {
  let result = `${data.customer} の支払い\n`;

  for (let perf of data.performances) {
    // 注文の内訳を加算
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }席) \n`;
  }

  result += `支払額は${usd(totalAmount())}\n`;
  result += `次回使える特典は${totalVolumeCredits()}ポイント\n`;
  return result;

  // 公演を取得する関数
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  // 一回のチケット料金を取得する関数
  function amountFor(aPerformance) {
    let result = 0;

    switch (playFor(aPerformance).type) {
      case 'tragedy':
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 1000 + 500 * (aPerformance.audience - 20);
        }
        this.Amount += 300 + aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }

    return result;
  }

  // ボリューム特典ポイント計算
  function volumeCreditsFor(aPerformance) {
    let result = 0;

    // ボリューム特典のポイントを換算
    result += Math.max(aPerformance.audience - 30, 0);

    // 喜劇のときは10人につき、さらにポイントを加算
    if ('comedy' === playFor(aPerformance).type)
      result += Math.floor(aPerformance.audience / 5);

    return result;
  }

  // 価格表示フォーマット関数
  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minumFractionDigits: 2
    }).format(aNumber / 100);
  }

  // ボリューム特典の集計
  function totalVolumeCredits() {
    let result = 0;
    for (let perf of data.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  // 総課金額を計算
  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      result += amountFor(perf);
    }
    return result;
  }
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
