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
  test('productionの変更', () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  });
  test('demandが0の場合', () => {
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });
  test('demandが-1の場合', () => {
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });
});

describe('Producerが設定されていないパターン', () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: 'No producers',
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });
  test('shortallで不足分計算をする', () => {
    expect(noProducers.shortfall).toBe(30);
  });
  test('profitで利益計算をする', () => {
    expect(noProducers.profit).toBe(0);
  });
});
