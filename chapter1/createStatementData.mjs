class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  // 一回のチケット料金を取得する関数
  get amount() {
    let result = 0;

    switch (this.play.type) {
      case 'tragedy':
        result = 40000;
        if (this.performance.audience > 30) {
          result += 1000 * (this.performance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (this.performance.audience > 20) {
          result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        break;
      default:
        throw new Error(`unknown type: ${this.play.type}`);
    }

    return result;
  }
}

export default function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);

  return result;

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    // deep copyにする場合はObject.createなどに変更する必要がある
    const result = { ...aPerformance };
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }
  // 公演を取得する関数
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  // ボリューム特典ポイント計算
  function volumeCreditsFor(aPerformance) {
    let result = 0;

    // ボリューム特典のポイントを換算
    result += Math.max(aPerformance.audience - 30, 0);

    // 喜劇のときは10人につき、さらにポイントを加算
    if ('comedy' === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);

    return result;
  }

  // 総課金額を計算
  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  // ボリューム特典の集計
  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
