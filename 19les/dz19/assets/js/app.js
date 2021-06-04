console.log('first homework')

let mass = +prompt('mass')
let height = +prompt('height')

if(height<5)
    height = height
else if(height>5)
    height = height / 100


console.log(height)

let index = mass/ (height**2)
console.log(index, typeof(index))

if (index <= 16){
    console.log('Severe underweight')
}else if(16 < index && index < 18){
    console.log('Insufficient (deficiency) body weight')
}else if(18 < index && index < 25){
    console.log('good')
}else if(25 < index && index < 30){
    console.log('Overweight (pre-obesity)')
}else if(30 < index && index < 35){
    console.log('Obesity 1 degree')
}else if(35 < index && index < 40){
    console.log('Obesity 2 degree')
}else if(index >= 40){
    console.log('Obesity 3 degree')
}


console.log('second homework')

let year = +prompt('enter year')

if (year%4 != 0 || (year%100 ==0 && year%400 != 0)){
    console.log('this year is not leap')
}
else {
    console.log('this year is leap')
}
    