//console.log('hello World');
//let a = 2
//let b = 3
//a = 7 + 3
//console.log(a, typeof(a))


//const incomeTaxRate = 0.18;
//const warTaxRate = 0.015;
//let income = prompt('input summ');
//income = parseFloat(income);
//console.log(`your income after theft: ${income} uan.`);
//let incomeTax = income * incomeTaxRate;
//console.log(`подоходный: ${incomeTax} uan.`);
//let warTax = income * warTaxRate;
//console.log(`военный сбор: ${warTax} uan.`);
//let your  = income - warTax - incomeTax;
//console.log(`'your: ${your} uan.`);

let mass = +prompt('масса')
let height = +prompt('рост')

if(0< height<5)
    height = height
else (height>5) 
    height = height / 100

let index = mass/ (height**2)
console.log(index)