let winterDays = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];


let count = 0
    for (i=0; i<winterDays.length; i++){
        if (winterDays[i]>winterDays[i+1] && winterDays[i]>=0 && winterDays [i+1]<0){
            count += 1
        }
    }
console.log(`///////////////////////////`)
console.log(`count of frosts day ${count}`)


let count1 = 0
let maxday = 0
for (j=0; j<winterDays.length; j++){
    if(winterDays[j]<0){
        for (i=0; i<winterDays.length; i++){
            if (winterDays[i]<0){
                count1 += 1
                if(count1>maxday){
                    maxday = count1
                }
            }else{
                count1 = 0
            }
        }
    }
}
console.log(`///////////////////////////`)
console.log(`max day of frosts day ${maxday}`)


let bitok = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8]
let maxincome = (-10)**15
let daybuy = 0
let daysell = 0

for(i=0; i<bitok.length; i++){
    let income = 0
    let buy = bitok[i]
    for(j=i+1; j<bitok.length; j++){
        let sell = bitok[j]
        income = sell - buy
        if(income>maxincome){
            daybuy = i+1
            daysell = j+1
            maxincome = income
        }
    }
}
console.log(`///////////////////////////`)
console.log(`day when buy ${daybuy}`)
console.log(`day when sell ${daysell}`)
console.log(`max income ${maxincome}`)
