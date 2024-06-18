const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const contentInput = document.querySelector("#content");
const imageInput = document.querySelector("#imagem");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    function obterID() {
        let id = parseInt(localStorage.getItem("id")) || 0;
        id += 1;
        localStorage.setItem("id", id);
        return id;
    }

    let post = {
        id: obterID(),
        autor: authorInput.value.trim(),
        titulo: titleInput.value.trim(),
        conteudo: contentInput.value.trim(),
        imagem: ""
    };

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            post.imagem = imageUrl;
            salvarPost(post);
        };
        reader.readAsDataURL(file);
    } else {
        salvarPost(post);
    }
});

function salvarPost(post) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    form.reset();
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postsContainer = document.querySelector("#posts-container");

    posts.forEach(function(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.titulo}</h2>
            <p>Autor: ${post.autor}</p>
            <p>${post.conteudo}</p>
            ${post.imagem ? `<img src="${post.imagem}" alt="Imagem do post">` : ""}
            <button class="delete-btn" data-id="${post.id}">Excluir</button>
            <button class="edit-btn" data-id="${post.id}">Editar</button>
        `;
        postsContainer.appendChild(postElement);
    });

    postsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            const postId = parseInt(event.target.getAttribute("data-id"));
            const updatedPosts = posts.filter(post => post.id !== postId);
            localStorage.setItem("posts", JSON.stringify(updatedPosts));
            location.reload();
        } else if (event.target.classList.contains("edit-btn")) {
            const postId = parseInt(event.target.getAttribute("data-id"));
            const post = posts.find(post => post.id === postId);
            window.location.href = `edit.html?id=${postId}`;
        }
    });
});
