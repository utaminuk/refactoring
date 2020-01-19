import { getRating } from '../src/InlineFunction';

describe('InlinetFunction: getRating', () => {
  beforeEach(() => {});
  afterEach(() => {});
  test('driver.numberOfLateDeliveriesの値が6なら2', () => {
    const driver = {
      numberOfLateDeliveries: 6
    };
    expect(getRating(driver)).toBe(2);
  });
  test('driver.numberOfLateDeliveriesの値が5なら1', () => {
    const driver = {
      numberOfLateDeliveries: 5
    };
    expect(getRating(driver)).toBe(1);
  });
});
