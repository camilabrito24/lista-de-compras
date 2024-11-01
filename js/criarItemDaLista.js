const listaDeComprados = document.querySelector("#lista-comprados");
let contador = 0;
export function criarItemDaLista(item){
    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    //const containerNomeItem = document.createElement("div");
    const itemListaTitulo = document.createElement("div");
    itemListaTitulo.classList.add("item-lista-titulo");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.classList.add("checkbox-input");
    inputCheckbox.id = "checkbox-" + contador++;

    const labelCheckbox = document.createElement("label");
    labelCheckbox.setAttribute("for",inputCheckbox.id);

    labelCheckbox.addEventListener("click", function (evento){
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if(checkboxInput.checked){
            checkboxCustomizado.classList.add("checked");
            listaDeComprados.appendChild(itemLista);
            itemTitulo.style.textDecoration = "line-through";
        } else{
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemLista);
        }

    })

    const checkboxCustomizado  = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    labelCheckbox.appendChild(inputCheckbox);
    labelCheckbox.appendChild(checkboxCustomizado);
    containerCheckbox.appendChild(labelCheckbox);
    itemListaTitulo.appendChild(containerCheckbox);
    containerItemLista.appendChild(itemListaTitulo);

    const nomeItem = document.createElement("p");
    nomeItem.id = "item-titulo";
    nomeItem.innerText = item;
    itemListaTitulo.appendChild(nomeItem);

    const containerBtn = document.createElement("div");
    const btnRemover = document.createElement("button");
    btnRemover.classList.add("btn-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src="img/deletar.png";
    imagemRemover.alt="Remover";
    btnRemover.appendChild(imagemRemover);
    containerBtn.appendChild(btnRemover);

    const btnEditar = document.createElement("button");
    btnEditar.classList.add("btn-acao");

    const imagemEditar = document.createElement("img");
    imagemEditar.src="img/editar.png";
    imagemEditar.alt="Editar";
    btnEditar.appendChild(imagemEditar);
    containerBtn.appendChild(btnEditar);

    const itemData = document.createElement("p");
    itemData.innerText =`${new Date().toLocaleDateString("pt-BR",{weekday:"long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR",{hour: "numeric", minute:"numeric"})}`;
    itemData.classList.add("item-lista-texto");


    containerItemLista.appendChild(containerBtn);
    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(itemData);

    return itemLista;
}