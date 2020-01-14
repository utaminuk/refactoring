"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleProvinceData = sampleProvinceData;
exports.Province = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Province =
/*#__PURE__*/
function () {
  function Province(doc) {
    var _this = this;

    _classCallCheck(this, Province);

    this._name = doc.name; // 地域名

    this._producers = []; // 生産者リスト

    this._totalProduction = 0; // 総生産量
    // input

    this._demand = doc.demand; // 需要

    this._price = doc.price; // 価格

    doc.producers.forEach(function (d) {
      return _this.addProducer(new Producer(_this, d));
    });
  }

  _createClass(Province, [{
    key: "addProducer",
    value: function addProducer(arg) {
      this._producers.push(arg);

      this._totalProduction += arg.production;
      return false;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "producers",
    get: function get() {
      return this._producers.slice();
    }
  }, {
    key: "totalProduction",
    get: function get() {
      return this._totalProduction;
    },
    set: function set(arg) {
      this._totalProduction = arg;
    }
  }, {
    key: "demand",
    get: function get() {
      return this._demand;
    },
    set: function set(arg) {
      this._demand = parseInt(arg);
    }
  }, {
    key: "price",
    get: function get() {
      return this._price;
    },
    set: function set(arg) {
      this._price = parseInt(arg);
    } // 不足分計算

  }, {
    key: "shortfall",
    get: function get() {
      return this._demand - this.totalProduction;
    } // 利益計算

  }, {
    key: "profit",
    get: function get() {
      return this.demandCost - this.demandValue;
    } // 需要計算

  }, {
    key: "demandValue",
    get: function get() {
      var remainingDemand = this.demand;
      var result = 0;
      this.producers.sort(function (a, b) {
        return a.cost - b.cost;
      }).forEach(function (p) {
        var contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
      return result;
    } // 総額コスト

  }, {
    key: "demandCost",
    get: function get() {
      return this.satisfiedDemand * this.price;
    }
  }, {
    key: "satisfiedDemand",
    get: function get() {
      return Math.min(this._demand, this.totalProduction);
    }
  }]);

  return Province;
}();

exports.Province = Province;

var Producer =
/*#__PURE__*/
function () {
  function Producer(aProvince, data) {
    _classCallCheck(this, Producer);

    this._province = aProvince; // 地域

    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  _createClass(Producer, [{
    key: "cost",
    get: function get() {
      return this._cost;
    },
    set: function set(arg) {
      this._cost = parseInt(arg);
    }
  }, {
    key: "production",
    get: function get() {
      return this._production;
    },
    set: function set(amountStr) {
      var amount = parseInt(amountStr);
      var newProduction = Number.isNaN(amount) ? 0 : amount;
      this._province.totalProduction += newProduction - this._production;
      this._production = newProduction;
    }
  }]);

  return Producer;
}(); // テスト用 地域データ


function sampleProvinceData() {
  return {
    name: 'Asia',
    producers: [{
      name: 'Byzantium',
      cost: 10,
      production: 9
    }, {
      name: 'Attalia',
      cost: 12,
      production: 10
    }, {
      name: 'Sinope',
      cost: 10,
      production: 6
    }],
    demand: 30,
    price: 20
  };
}