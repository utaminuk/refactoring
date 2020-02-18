// レコードのカプセル化(p168)

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  set name(aString) {
    this._name = aString;
  }
  get name() {
    return this._name;
  }
  set country(aString) {
    this._country = aString;
  }
  get country() {
    return this._country;
  }
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });

export function getOrganization() {
  return organization;
}

// 実際の利用例
console.log(getOrganization().name);

// 元コードの保存
// const organization = { name: "Acme Gooseberries", country: "GB" }
// console.log(organization);
