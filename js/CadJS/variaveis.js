let getId       = document.getElementById("id");
let getImg      = document.getElementById("img");
let getDescri   = document.getElementById("descricao");
let getPreco    = document.getElementById("preco");

let getCad      = document.getElementById("cadastrar");
let getEdit     = document.getElementById("cadastrar");
let getRemove   = document.getElementById("cadastrar");
let getCancel   = document.getElementById("cadastrar");

let url = ("http://localhost:8080/");

let hidden = true;

getCancel.addEventListener('click', function() {
    hidden = true;
    hiddenBtns();
})