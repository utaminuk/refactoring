import { Province, sampleProvinceData } from '../src/index';

describe('Province', () => {
  test('shortall', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(5);
  });
});
