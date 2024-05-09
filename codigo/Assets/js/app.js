const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const contentInput = document.querySelector("#content");
const imageInput = document.querySelector("#imagem");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 


    let post = {
        id: obterID(),
        autor: authorInput.value.trim(),
        titulo: titleInput.value.trim(),
        conteudo: contentInput.value.trim(),
        imagem: imageInput.files.length > 0 ? imageInput.files[0].name : ""
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];


    posts.push(post);


    localStorage.setItem("posts", JSON.stringify(posts));


    form.reset();

    window.location.href = "index.html";
});  

function obterID() {
    let id = parseInt(localStorage.getItem("id")) || 0;
    id += 1;
    localStorage.setItem("id", id);
    return id;
}
