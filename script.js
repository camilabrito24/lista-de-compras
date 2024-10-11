const item = document.querySelector("#input-item");
const btnSalvarItem = document.querySelector("#btn-adicionar-item");
const listaDeCompras = document.querySelector("#lista-de-compras");
let contador = 0;

btnSalvarItem.addEventListener("click",adicionarItem);

function adicionarItem(evento){
    evento.preventDefault();
    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeItem = document.createElement("div");
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.classList.add("checkbox-input");
    inputCheckbox.id = "checkbox-" + contador++;

    const labelCheckbox = document.createElement("label");
    labelCheckbox.setAttribute("for",inputCheckbox.id);

    const checkboxCustomizado  = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    labelCheckbox.appendChild(inputCheckbox);
    labelCheckbox.appendChild(checkboxCustomizado);
    containerCheckbox.appendChild(labelCheckbox);
    containerNomeItem.appendChild(containerCheckbox);

    const nomeItem = document.createElement("p");
    nomeItem.innerText = item.value;
    containerNomeItem.appendChild(nomeItem);

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

    containerItemLista.appendChild(containerNomeItem);
    containerItemLista.appendChild(containerBtn);
    itemLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemLista);
}