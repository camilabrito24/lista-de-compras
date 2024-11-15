import {criarItemDaLista} from "./criarItemDaLista.js";
import {verificarListaVazia} from "./verificarListaVazia.js";

const item = document.querySelector("#input-item");
const listaDeCompras = document.querySelector("#lista-de-compras");

export function adicionarItem(evento){
    evento.preventDefault();

    const itemLista =  criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemLista);
    verificarListaVazia(listaDeCompras);
}