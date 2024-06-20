document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith("infocadastrada.html")) {
        mostrarpessoas();
    }
});

const form = document.getElementById("form");
const nomeInput = document.querySelector("#nome");
const numeroInput = document.querySelector("#numero");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const senha2Input = document.querySelector("#senha2");

function salvar() {
    if (nomeInput.value && numeroInput.value && emailInput.value && senhaInput.value && senha2Input.value) {
        if (senhaInput.value === senha2Input.value) {
            let pessoa = {
                id: obterID(),
                nome: nomeInput.value.trim(),
                numero: numeroInput.value.trim(),
                email: emailInput.value.trim(),
                senha: senhaInput.value.trim()
            };

            let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
            pessoas.push(pessoa);
            localStorage.setItem("pessoas", JSON.stringify(pessoas));

            form.reset();
            window.location.href = "infocadastrada.html";
        } else {
            let errado = document.getElementById("errado");
            errado.classList.add("erro");
        }
    } else {
        let erro = document.getElementById("erro");
        erro.classList.add("erro");
    }
}

function mostrarpessoas() {
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    const ul = document.querySelector(".postagens");
    ul.innerHTML = "";
    pessoas.forEach(pessoa => {
        const li = document.createElement("li");
        li.innerHTML = `<p>nome: ${pessoa.nome} <br> número: ${pessoa.numero} <br> email: ${pessoa.email} <br> senha: ${pessoa.senha}</p> <p> <i onclick="editar(${pessoa.id})" class="fa-regular fa-pen-to-square"></i> <i onclick="remover(${pessoa.id})" class="fa-regular fa-trash-can"></i> </p>`;
        ul.appendChild(li);
    });
}

function obterID() {
    let id = parseInt(localStorage.getItem("id")) || 0;
    id += 1;
    localStorage.setItem("id", id);
    return id;
}

function remover(id) {
    let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    mostrarpessoas();
}

function editar(id) {
    let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    const pessoa = pessoas.find(pessoa => pessoa.id === id);
    
    const novoNome = prompt("Edite o nome:", pessoa.nome);
    const novoNumero = prompt("Edite o número de telefone:", pessoa.numero);
    const novoEmail = prompt("Edite o e-mail:", pessoa.email);
    const novaSenha = prompt("Edite a senha:", pessoa.senha);

    if (novoNome !== null && novoNome.trim() !== "") {
        pessoa.nome = novoNome.trim();
    }
    if (novoNumero !== null && novoNumero.trim() !== "") {
        pessoa.numero = novoNumero.trim();
    }
    if (novoEmail !== null && novoEmail.trim() !== "") {
        pessoa.email = novoEmail.trim();
    }
    if (novaSenha !== null && novaSenha.trim() !== "") {
        pessoa.senha = novaSenha.trim();
    }

    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    mostrarpessoas();
}

