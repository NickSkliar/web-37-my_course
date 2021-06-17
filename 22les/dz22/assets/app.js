function round(n)
{
	return Math.floor(n*1000)/1000;
}

function calc(){
    let mass = +massInput.value
    let height = +heightInput.value
    if(height<5){
        height = height
    }else if(height>5){
        height = height / 100
    }
    let index = mass/ (height**2)
    resultIndex.innerHTML = round(index)
    
    if (index <= 16){
        resultOutput.innerHTML = "Severe underweight"
    }else if(16 < index && index < 18){
        resultOutput.innerHTML = "Insufficient (deficiency) body weight"
    }else if(18 < index && index < 25){
        resultOutput.innerHTML = "good"
    }else if(25 < index && index < 30){
        resultOutput.innerHTML = "Overweight (pre-obesity)"
    }else if(30 < index && index < 35){
        resultOutput.innerHTML = "Obesity 1 degree"
    }else if(35 < index && index < 40){
        resultOutput.innerHTML = "Obesity 2 degree"
    }else if(index >= 40){
        resultOutput.innerHTML = "Obesity 3 degree"
    }
}