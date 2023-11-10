function getTable(){
    fetch(url)
    .then(response => response.json())
    .then(produto => preencherTable(produto));
}

function hiddenBtns(){
    if(hidden){
        getCad.classList.toggle("visually-hidden");
        getEdit.classList.toggle("visually-hidden");
        getDescri.classList.toggle("visually-hidden");
        getCancel.classList.toggle("visually-hidden");
        hidden = true;
    }
}