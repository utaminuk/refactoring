import { getOrganization } from "../src/EncapsulateRecord";

describe("EncapsulateRecord: getOrganization", () => {
  beforeEach(() => { });
  afterEach(() => { });
  test("getOrganization: 主催者の名前取得", () => {
    expect(getOrganization().name).toEqual("Acme Gooseberries");
  });
  test("getOrganization: 主催者の国名取得", () => {
    expect(getOrganization().country).toEqual("GB");
  });
});

