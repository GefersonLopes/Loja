function soma(somar){
    let guardarValor=0;
    somar.filter((somando)=>guardarValor+=somando.preco)
    let valorTotal=document.querySelector("#precoTotal")
    valorTotal.innerText=`${guardarValor}.00`;
}


function criandoProdutos(itens){
    const ul=document.querySelector("ul");
    ul.innerHTML="";
    soma(itens);
    for(let i=0;i<produtos.length;i++){
        
        const li=document.createElement("li");
        const img=document.createElement("img");
        const h3=document.createElement("h3");
        const p=document.createElement("p");
        const span=document.createElement("span");

        img.src=itens[i].img;
        h3.innerText=itens[i].nome;
        p.innerText=itens[i].preco;
        span.innerText=`seção ${itens[i].secao}`;

        ul.append(li);
        li.append(img,h3,p,span);
    }
};
criandoProdutos(produtos);


const botaoMostrarTodos=document.querySelector(".estiloGeralBotoes--mostrarTodos");
botaoMostrarTodos.addEventListener("click",function chamarFuncao(){
    criandoProdutos(produtos);
});


const botaoMostrarFrutas=document.querySelector(".estiloGeralBotoes--filtrarHortifruti");
botaoMostrarFrutas.addEventListener("click",function botao(){
    const hortifrut= produtos.filter(function frutas(apenasFrutas){
        return apenasFrutas.secao=="Hortifruti"?true:false;
    });
    criandoProdutos(hortifrut);
});


const input=document.querySelector(".campoBuscaPorNome");
const buttonBuscar=document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome");
buttonBuscar.addEventListener("click",function(){
    let busca=input.value;
    let seusProdutos=produtos.filter(function buscarItem(item){
        return item.nome==busca?true:false;
    })
    criandoProdutos(seusProdutos);
    
});


