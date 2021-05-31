    
    
    let count_piktures = 1;

    function next()
    {
        
        count_piktures += 1

        if (count_piktures>8)
            count_piktures = 1
            
        photo .src = `./assets/images/photo-${count_piktures}.jpg`
        //alert("hello!!");
        caption.innerHTML = `Photo #${count_piktures}`;
    }   