import {verificarListaVazia} from "./verificarListaVazia.js";
import {verificarListaComprados} from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listComprados = document.getElementById("lista-comprados");
const excluirItem = (elemento) =>{
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    if(confirmacao){
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listComprados);
    }

}

export {excluirItem};