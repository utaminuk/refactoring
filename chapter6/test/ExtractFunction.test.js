import { printOwing2 } from '../src/ExtractFunction';

describe('ExtractFunction: printOwinge2', () => {
  let asia;
  beforeEach(() => {});
  afterEach(() => {});
  test('Owing2のテスト', () => {
    const expected = {
      others: [{ amount: 100 }, { amount: 200 }]
    };
    expect(printOwing2(expected)).toBe(300);
  });
});
