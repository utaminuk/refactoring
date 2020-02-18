// レコードのカプセル化(p168)

class Organization {
  constructor(data) {
    this._data = data;
  }
  set name(aString) {
    this._data.name = aString;
  }
  get name() {
    return this._data.name;
  }
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });

function getRawDataOfOrganization() { return organization._data; }

export function getOrganization() {
  return organization;
}

// 実際の利用例
console.log(getRawDataOfOrganization());

// 元コードの保存
// const organization = { name: "Acme Gooseberries", country: "GB" }
// console.log(organization);
