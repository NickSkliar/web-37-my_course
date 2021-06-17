function action(){
    //console.dir(special)
    //special.innerHTML = 'hello world'
    //special.classList.add('text-danger')
    let tag = document.querySelectorAll('p')
    //console.dir(tag)
    for(let item of tag){
        item.classList.add('alert')
        item.classList.add('alert-success')
    }
}