
const pessoas = JSON.parse(localStorage.getItem("pessoas"));
const cardBodyDiv = document.querySelector(".card-body");
for (let i = 0; i < pessoas.length; i++)
    {
    
    const pessoa = pessoas[i];
    const id = document.createElement("p");
    id.innerHTML = `<strong>pessoa número: ${pessoa.id}</strong>`;
    const nome = document.createElement("p");
    nome.textContent = `Nome: ${pessoa.nome}`;
    const email = document.createElement("p");
    email.textContent = `E-mail: ${pessoa.email}`;
    const numero = document.createElement("p");
    numero.textContent = `Número de Telefone: ${pessoa.numero}`;
    const senha = document.createElement("p");
    senha.textContent = `Senha: ${pessoa.senha}`;

    cardBodyDiv.appendChild(id);
    cardBodyDiv.appendChild(nome);
    cardBodyDiv.appendChild(email);
    cardBodyDiv.appendChild(numero);
    cardBodyDiv.appendChild(senha);

}