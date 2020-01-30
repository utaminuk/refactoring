import { amountInvoiced, amountReceived, amountOverdue } from '../src/IntroduceParameterObject.js';

describe('IntroduceParameterObject: パラメータオブジェクトの導入', () => {
  beforeEach(() => { });
  afterEach(() => { });

  test('amountInvoice: 開始時間と終了時間を設定して請求額を返す', () => {
    const startDate = new Date(2019, 10, 11, 21, 23, 1);
    const endDate = new Date(2019, 10, 11, 21, 23, 21);
    expect(amountInvoiced(startDate, endDate)).toBe(20 * 1000 * 10);
  });

  test('amountReceived: 開始時間と終了時間を設定して返金額を返す', () => {
    const startDate = new Date(2019, 10, 11, 21, 23, 1);
    const endDate = new Date(2019, 10, 11, 21, 23, 21);
    expect(amountReceived(startDate, endDate)).toBe(20 * 1000 * 20);
  });

  test('amountOverdue: 開始時間と終了時間を設定して延滞金を返す', () => {
    const startDate = new Date(2019, 10, 11, 21, 23, 1);
    const endDate = new Date(2019, 10, 11, 21, 23, 21);
    expect(amountOverdue(startDate, endDate)).toBe(20 * 1000 * 30);
  });



});
