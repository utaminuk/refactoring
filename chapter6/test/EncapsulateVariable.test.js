import defaultOwner from '../src/EncapsulateVariable';

describe('EncapsulateVariable: 変数のカプセル化', () => {
  beforeEach(() => { });
  afterEach(() => { });
  test('デフォルトオーナーの配列をチェックする', () => {
    const expected = { firstName: 'Martin', lastName: 'Fowler' }
      ;
    expect(defaultOwner()).toStrictEqual(expected);
  });


});
