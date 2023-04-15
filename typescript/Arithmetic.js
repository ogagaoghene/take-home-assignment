"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArithmeticModule_1 = require("./ArithmeticModule");
var calculation = new ArithmeticModule_1.Arithmetic();
calculation.a = 2;
calculation.b = 3;
console.log(calculation.add());
console.log(calculation.sub());
console.log(calculation.mult());
