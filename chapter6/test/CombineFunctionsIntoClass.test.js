import { baseRate, calculateBaseCharge } from '../src/CombineFunctionsIntoClass.js';

describe('CombineFunctionsIntoClass.baseRate: 関数群のクラスへの集約 - 基本レート', () => {
  beforeEach(() => { });
  afterEach(() => { });
  test('baseRate: 正常系 2019, 10を入力', () => {
    expect(baseRate(10, 2019)).toBe(1.04);
  });

});

describe('CombineFunctionsIntoClass.calculateBaseCharge: 関数群のクラスへの集約 - 基本支払い計算', () => {
  beforeEach(() => { });
  afterEach(() => { });
  test('baseRate: 正常系 2019, 10を入力', () => {
    let expected = { customer: "ivan", quantity: 10, month: 6, year: 2017 };
    expect(calculateBaseCharge(expected)).toBe(10.6);
  });

});
