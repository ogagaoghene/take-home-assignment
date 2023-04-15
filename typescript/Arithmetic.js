var Arithmetic = /** @class */ (function () {
    function Arithmetic(_a, _b) {
        if (_a === void 0) { _a = 4; }
        if (_b === void 0) { _b = 3; }
        this._a = _a;
        this._b = _b;
    }
    Arithmetic.prototype.add = function () {
        return this._a + this._b;
    };
    Arithmetic.prototype.sub = function () {
        return this._a - this._b;
    };
    Arithmetic.prototype.mult = function () {
        return this._a * this._b;
    };
    Object.defineProperty(Arithmetic.prototype, "a", {
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Arithmetic.prototype, "b", {
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    return Arithmetic;
}());
var calculation = new Arithmetic();
calculation.a = 2;
calculation.b = 3;
console.log(calculation.add());
console.log(calculation.sub());
console.log(calculation.mult());
