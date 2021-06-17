    
    function calc(){
        let sum     = +sumInput.value;
        let term    = +termInput.value;
        let rate    = +rateInput.value;
        let mRate   = rate / 12 / 100;
        
        let finalResult;

        if(capInput.checked){
            
            finalResult = sum * ( ( 1 + mRate ) ** term );

        }else{

            finalResult = sum + sum * mRate * term;

        }

        finalResult = Math.round( finalResult * 100 ) / 100; // Округляем до 2-х знаков после запятой;

        result.innerHTML = finalResult;

    }