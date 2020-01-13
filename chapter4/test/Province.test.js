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
