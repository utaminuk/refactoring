import { Province, sampleProvinceData } from '../src/index';

describe('Province', () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  test('shortallで不足分計算をする', () => {
    expect(asia.shortfall).toBe(5);
  });
  test('profitで利益計算をする', () => {
    expect(asia.profit).toBe(230);
  });
});
