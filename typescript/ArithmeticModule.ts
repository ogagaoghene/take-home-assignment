export class Arithmetic {
   
    constructor(private _a: number = 4,  private _b: number = 3) {}

    add() {
        return this._a + this._b;
    }

    sub() {
        return this._a - this._b;
    }

    mult() {
        return this._a * this._b;
    }

    set a(value: number) {
        this._a = value;
    }

    set b(value: number) {
        this._b = value;
    }
}