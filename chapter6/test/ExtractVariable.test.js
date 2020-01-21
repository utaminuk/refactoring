import { ExtractVariable } from '../src/ExtractVariable';

describe('ExtractVariable', () => {
  beforeEach(() => {});
  afterEach(() => {});
  test('正常動作', () => {
    const order = {
      quantity: 100,
      itemPrice: 2000
    };
    expect(ExtractVariable(order)).toBe(10100);
  });
});
