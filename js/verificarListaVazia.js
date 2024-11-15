const mensagemListaVazia = document.querySelector('#mensagem-lista-vazia');

export function verificarListaVazia(lista){
    if(lista.childElementCount === 0){
        mensagemListaVazia.style.display = "block";
    }else{
        mensagemListaVazia.style.display = "none";
    }
}