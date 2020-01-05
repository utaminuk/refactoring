class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error(`サブクラスの責務`);
  }

  // ボリューム特典ポイント計算
  get volumeCredits() {
    let result = 0;

    // ボリューム特典のポイントを換算
    result += Math.max(this.performance.audience - 30, 0);

    // 喜劇のときは10人につき、さらにポイントを加算
    if ('comedy' === this.play.type)
      result += Math.floor(this.performance.audience / 5);

    return result;
  }
}

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`未知の演劇の種類: ${aPlay.type}`);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
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
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    // deep copyにする場合はObject.createなどに変更する必要がある
    const result = { ...aPerformance };
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }
  // 公演を取得する関数
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
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
