function calc(){
    let sum = +sumInput.value
    let term = +termInput.value
    let rate = +rateInput.value
    let mRate = rate/12/100
    let check = capInput.checked
    if(check){
        sum = sum*((1+mRate)**term)
    }else{
        sum = sum + sum*mRate*term
    }
    resultPlace.innerHTML = sum
}