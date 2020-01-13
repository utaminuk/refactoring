import { Province, sampleProvinceData } from '../src/index';

describe('Province', () => {
  test('shortallで不足分計算をする', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(5);
  });
  test('profitで利益計算をする', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).toBe(230);
  });
});
