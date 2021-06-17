function changeSize(){

    let size = fontSizeInput.value
    let tag = document.querySelector('html')
    tag.style.fontSize = `${size}px`
}

function changeColor(){
    let color = colorInput.value
    let tag = document.querySelector('body')
    tag.style.background = color
}