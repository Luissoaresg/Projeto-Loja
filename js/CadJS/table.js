getTable();

function preencherTable(produto){
    produto.forEach(p => {
        insertTable(p);
    });
}

function insertTable(p){
    var newRow      = document.createElement("tr");
    var columId     = document.createElement("td"); 
    var columImg    = document.createElement("td"); 
    var columDescr  = document.createElement("td"); 
    var columPreco  = document.createElement("td"); 
    var columTipo   = document.createElement("td"); 
    var columSelect = document.createElement("td"); 

    columId.classList.add("col-id");
    columId.innerText = p.id;

    var img = new Image();
    img.src = "data:img/png;base64," + p.img;
    columImg.appendChild(img);

    columDescr.classList.add("col-descri");
    columDescr.innerText = p.descricao;

    columPreco.classList.add("col-preco");
    columPreco.innerText = p.preco;

    columTipo.classList.add("col-tipo");
    if(p.tipo == 1){
        columTipo.innerText = "Mais Vendidos";
    } else if(p.tipo == 2){
        columTipo.innerText = "Lançamentos";
    }

    var btn = document.createElement("button");
    btn.classList.add("btn", "btn-success");
    btn.innerText = "Selecionar";
    columSelect.appendChild(btn);

    newRow.appendChild(columId);
    newRow.appendChild(columImg);
    newRow.appendChild(columDescr);
    newRow.appendChild(columPreco);
    newRow.appendChild(columTipo);
    newRow.appendChild(columSelect);

    document.querySelector("tbody").appendChild(newRow);
}