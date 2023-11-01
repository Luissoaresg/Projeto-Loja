function listarSite() {
    var divCart = document.createElement('div');
    var divImgProd = document.createElement('div');
    var divDescriProd = document.createElement('div');
    var divPrecoBack = document.createElement('div');
    var divPrecoNext = document.createElement('div');
    var divBtnComprar = document.createElement('div');

    divCart.classList.add("cart-lancamentos", "cart");
    
    divImgProd.classList.add("img-prod");
    var img = document.createElement("img");
    img.src = "imgs/produtos/cod-pc-key.webp";
    divImgProd.appendChild(img);
    
    divDescriProd.classList.add("descri-prod");
    divDescriProd.innerText = "Call of Duty MW2 PC Key Global";
    
    divPrecoBack.classList.add("preco-back");
    divPrecoBack.innerHTML = "<s>R$ 199,90 BRL</s>";
    
    divPrecoNext.classList.add("preco-next");
    divPrecoNext.innerText = "R$ 59,90 BRL";
    
    var btn = document.createElement("button");
    btn.classList.add("btn-comprar");
    btn.innerText = "Comprar"
    divBtnComprar.appendChild(btn);
    
    divCart.appendChild(divImgProd);
    divCart.appendChild(divDescriProd);
    divCart.appendChild(divPrecoBack);
    divCart.appendChild(divPrecoNext);
    divCart.appendChild(divBtnComprar);

    document.getElementById("prod-lancamentos").appendChild(divCart);
}

listarSite();