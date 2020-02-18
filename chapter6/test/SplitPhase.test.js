import { priceOrder } from "../src/SplitPhase";

describe("SplitPhase: priceOrder", () => {
  beforeEach(() => { });
  afterEach(() => { });
  test("料金計算プログラム", () => {
    const product = {
      basePrice: 100,
      discountRate: 1.2,
      discountThreshold: 50
    };
    const quantity = 500;
    const shippingMethod = {
      discountThreshold: 90,
      discountedFee: 10,
      feePerCase: 20
    };
    expect(priceOrder(product, quantity, shippingMethod)).toBe(1000);
  });
});

