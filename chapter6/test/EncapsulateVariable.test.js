import {
  defaultOwner,
  setDefaultOwner
} from '../src/EncapsulateVariable';

describe('EncapsulateVariable: 変数のカプセル化', () => {
  beforeEach(() => { });
  afterEach(() => { });
  test('デフォルトオーナーの配列をチェックする', () => {
    const expected = { firstName: 'Martin', lastName: 'Fowler' }
      ;
    expect(defaultOwner()).toStrictEqual(expected);
  });

  test('デフォルトオーナーの配列を更新', () => {
    const expected = { firstName: 'Tim', lastName: 'Thornton' }
      ;
    setDefaultOwner(expected);
    expect(defaultOwner()).toStrictEqual(expected);
  });



});
