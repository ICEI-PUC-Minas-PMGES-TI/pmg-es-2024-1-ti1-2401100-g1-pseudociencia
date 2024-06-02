const form = document.getElementById("form");
const nomeInput = document.querySelector("#nome");
const numeroInput = document.querySelector("#numero");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const senha2Input = document.querySelector("#senha2");

function salvar() {
    if (nomeInput.value && numeroInput.value && emailInput.value && senhaInput.value && senha2Input.value){
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
    }
    else {
        let errado = document.getElementById("errado");
        errado.classList.add("erro");
    }
}
else {
    let erro = document.getElementById("erro");
        erro.classList.add("erro");
}
};

function obterID() {
    let id = parseInt(localStorage.getItem("id")) || 0;
    id += 1;
    localStorage.setItem("id", id);
    return id;
};
