import { Arithmetic } from './ArithmeticModule';

let calculation = new Arithmetic();
calculation.a = 2;
calculation.b = 3;

console.log(calculation.add());
console.log(calculation.sub());
console.log(calculation.mult());