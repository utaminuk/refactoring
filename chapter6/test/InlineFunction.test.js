import { getRating } from '../src/InlineFunction';

describe('InlinetFunction: getRating', () => {
  beforeEach(() => {});
  afterEach(() => {});
  test('Owing2のテスト', () => {
    const driver = {
      numberOfLateDeliveries: 6
    };
    expect(getRating(driver)).toBe(2);
  });
});
