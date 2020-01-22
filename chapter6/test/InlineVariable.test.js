import { isHigherThousand } from '../src/InlineVariable';

describe('InlinetVariable: isHigherThousand', () => {
  beforeEach(() => {});
  afterEach(() => {});
  test('基本価格が1000より大きかったTrueを返す', () => {
    const order = {
      basePrice: 1001
    };
    expect(isHigherThousand(order)).toBe(true);
  });
  test('基本価格が1000だったらFalseを返す', () => {
    const order = {
      basePrice: 1000
    };
    expect(isHigherThousand(order)).toBe(false);
  });
  test('基本価格が1000以下だったらFalseを返す', () => {
    const order = {
      basePrice: 990
    };
    expect(isHigherThousand(order)).toBe(false);
  });
});
