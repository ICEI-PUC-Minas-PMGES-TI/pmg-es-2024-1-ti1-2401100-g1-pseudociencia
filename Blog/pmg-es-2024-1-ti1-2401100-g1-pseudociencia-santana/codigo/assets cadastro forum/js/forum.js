function perguntar() {
    const perguntaInput = document.querySelector("#pergunta");
    let pergunta = {
        id: obterID(),
        pergunta: perguntaInput.value.trim()
    };
    if (pergunta.pergunta === "") {
        alert("Por favor, insira uma pergunta.");
        return;
    }
    let perguntas = JSON.parse(localStorage.getItem("perguntas")) || [];
    perguntas.push(pergunta);
    localStorage.setItem("perguntas", JSON.stringify(perguntas));
    perguntaInput.value = '';
    mostrarperguntas();
};
function mostrarperguntas() {
    const perguntas = JSON.parse(localStorage.getItem("perguntas")) || [];
    const ul = document.querySelector(".postagens");
    ul.innerHTML = "";
    perguntas.forEach(pergunta => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${pergunta.pergunta}</p> <p> <i onclick="editar(${pergunta.id})" class="fa-regular fa-pen-to-square"></i> <i onclick="remover(${pergunta.id})" class="fa-regular fa-trash-can"></i> </p>`;
        ul.appendChild(li);
    });
}

function obterID() {
    let id = parseInt(localStorage.getItem("id")) || 0;
    id += 1;
    localStorage.setItem("id", id);
    return id;
};

function remover(id) {
    let perguntas = JSON.parse(localStorage.getItem("perguntas")) || [];
    perguntas = perguntas.filter(pergunta => pergunta.id !== id);
    localStorage.setItem("perguntas", JSON.stringify(perguntas));
    mostrarperguntas();
}

function editar(id) {
    let perguntas = JSON.parse(localStorage.getItem("perguntas")) || [];
    const pergunta = perguntas.find(pergunta => pergunta.id === id);
    const novapergunta = prompt("Edite a pergunta:", pergunta.pergunta);
    if (novapergunta !== null && novapergunta.trim() !== "") {
        pergunta.pergunta = novapergunta.trim();
        localStorage.setItem("perguntas", JSON.stringify(perguntas));
        mostrarperguntas();
    }
}

document.addEventListener("DOMContentLoaded", mostrarperguntas);