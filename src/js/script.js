const divCompra=document.querySelector(".itensSelecionados");
const ulCarrinho=document.createElement("ul");
const sacola=document.querySelector("#sacola");
const Remover=document.querySelector("#Remover");
let quantidadeCarrinho=document.getElementById("quantidadeDeItens");
let valorCarrinho=document.getElementById("valorDosItens");


// Criando card de produtos//
/////////////////////////////
function criandoProdutos(itens){
    const ul=document.querySelector("ul");
    ul.innerHTML="";
    for(let i=0;i<produtos.length;i++){
        
        const li=document.createElement("li");
        const img=document.createElement("img");
        const h3=document.createElement("h3");
        const p=document.createElement("p");
        const span=document.createElement("span");
        const ol=document.createElement("ol");
        const button=document.createElement("button");
        const divButton=document.createElement("div");


        li.classList="itens";
        img.src=itens[i].img;
        h3.innerText=itens[i].nome;
        p.innerText=`R$ ${itens[i].preco}`;
        span.innerText=`${itens[i].secao}`;
        button.innerText="Comprar";
        divButton.classList="Comprar";
        button.classList="botao";

        h3.classList="NomeDosCards"

        itens[i].componentes.forEach((element) => {
            let li=document.createElement("li");
            li.innerText=element
            ol.append(li);
            
            
        });

        divButton.append(button);
        ul.append(li);
        li.append(img,h3,span,ol,p,divButton);
        
        
        button.addEventListener("click",()=>{
            adicionarAoCarrinho(itens[i]);
            soma(itens[i]);
        });
      
    }
};
criandoProdutos(produtos);


// adicionando evento aos botôes//
//////////////////////////////////
const mostrarTodos=document.getElementById("Todos");
const mostrarHortifrut=document.getElementById("Hortifruti");
const mostrarPanificadora=document.getElementById("Panificadora");
const mostrarLaticinios=document.getElementById("Laticínios");

let inputPesquisarProduto=document.querySelector(".campoBuscaPorNome");
const botaoPesquisar=document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome");

mostrarTodos.addEventListener("click",()=>criandoProdutos(produtos));

mostrarHortifrut.addEventListener("click",()=>{
    const Hortifruti=produtos.filter(elemento=>{
        return elemento.secao=="Hortifruti";
    })
    criandoProdutos(Hortifruti);
});

mostrarPanificadora.addEventListener("click",()=>{
    const Panificadora=produtos.filter(elemento=>{
        return elemento.secao=="Panificadora";
    })
    criandoProdutos(Panificadora)
});

mostrarLaticinios.addEventListener("click",()=>{
    const Laticinios=produtos.filter(elemento=>{
        return elemento.secao=="Laticinio";
    })
    criandoProdutos(Laticinios)
});


botaoPesquisar.addEventListener("click",()=>{
    let valor=inputPesquisarProduto.value;
    const pesquisarItem=produtos.filter(elemento=>{
        return elemento.nome.toLowerCase().includes(valor.toLowerCase())||elemento.secao.toLowerCase().includes(valor.toLowerCase())||elemento.categoria.toLowerCase().includes(valor.toLowerCase());
    })
    criandoProdutos(pesquisarItem)
});


function adicionarAoCarrinho(conteudo){
    
    sacola.remove();
    Remover.innerHTML="";
    
    const liCarrinho=document.createElement("li");
    const imgCarrinho=document.createElement("img");
    const divCarrinho=document.createElement("div");
    const h3Carrinho=document.createElement("h3");
    const pCarrinho=document.createElement("p");
    const spanCarrinho=document.createElement("span");
    
    liCarrinho.classList="liCarrinho";
    divCarrinho.classList="infoCarrinho";
    h3Carrinho.classList="infoCarrinho_";
    pCarrinho.classList="infoCarrinho_";
    pCarrinho.id="Infosecao";
    spanCarrinho.classList="infoCarrinho_";
    imgCarrinho.classList="imagemCarrinho";

    imgCarrinho.src=conteudo.img;
    imgCarrinho.alt="foto";
    h3Carrinho.innerText=conteudo.nome;
    pCarrinho.innerText=conteudo.secao;
    spanCarrinho.innerText=`R$ ${conteudo.preco}`;

    divCarrinho.append(h3Carrinho,pCarrinho,spanCarrinho);
    liCarrinho.append(imgCarrinho,divCarrinho);
    ulCarrinho.append(liCarrinho);
    divCompra.append(ulCarrinho);

}

let quantidade=0;
let valorTotal=0;

function soma(itens){
    quantidade+=1;
    valorTotal+=Number(itens.preco);
    quantidadeCarrinho.innerText=quantidade;
    valorCarrinho.innerText=`R$ ${valorTotal},00`;
}


