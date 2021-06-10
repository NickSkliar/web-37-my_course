let n = +prompt('скока элементов хотите?')
let array = []
let chet = []
let summ = 0
for ( i = 0; i <= n-1; i++ ) {
        let a = Math.round( Math.random() * 100 )
        array[i] = a
}
console.log(`мой масив ${array}`)


b=57
let arr1 = []
for(i=21; i<=b; i++){
    arr1[i] = i
}
console.log(`числа от 21 до 57 ${arr1}`)


for (i = 0; i <= array.length; i++){
    if(array[i]%2==0){
        chet[i] = array[i]
    }
}
console.log(`четные числа первого массива ${chet}`)

for(i=0; i< array.length; i++){
    summ += array[i]
}
console.log(`сумма чисел ${summ}`)


let simple = []
let flag = true
let k = +prompt('до куда проверяем простые числа?')
for (i=1; i<= k; i++){
    for(j=2; j<=i; j++){
        if (i%j == 0){
            flag = false
            break
        }
        simple[i] = i
    }
}
console.log(`мои простые числа на твоем промежутке ${simple}`)