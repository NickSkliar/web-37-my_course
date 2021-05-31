//console.log('hello World');
//let a = 2
//let b = 3
//a = 7 + 3
//console.log(a, typeof(a))
const incomeTaxRate = 0.18;
const warTaxRate = 0.015;

let income = prompt('input summ');

income = parseFloat(income);

console.log('your income after theft: ${income} uan.');

let incomeTax = income * incomeTaxRate;
console.log('подоходный: ${incomeTax} uan.');
let warTax = income * warTaxRate;
console.log('военный сбор: ${warTax} uan.');
let your  = income - warTax - incomeTax;
console.log('your: ${your} uan.');