const containerListaComprados = document.getElementById("container-lista-comprados")

export function verificarListaComprados(lista) {
    console.log(lista);

    if (lista.childElementCount === 0) {
        containerListaComprados.style.display = "none";
    } else {
        containerListaComprados.style.display = "block";
    }
}