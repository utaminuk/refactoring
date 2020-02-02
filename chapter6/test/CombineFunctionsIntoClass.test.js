import { baseRate } from '../src/CombineFunctionsIntoClass.js';

describe('CombineFunctionsIntoClass.baseRate: 関数群のクラスへの集約 - 基本レート', () => {
  beforeEach(() => { });
  afterEach(() => { });
  test('baseRate: 正常系 2019, 10を入力', () => {
    expect(baseRate(2019, 10)).toBe(1.04);
  });

});
