document.addEventListener("DOMContentLoaded", function() {
    const postId = new URLSearchParams(window.location.search).get("id");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const post = posts.find(post => post.id === parseInt(postId));

    if (!post) {
        console.error("Post não encontrado.");
        return;
    }

    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const contentInput = document.querySelector("#content");
    const imageInput = document.querySelector("#imagem");


    titleInput.value = post.titulo;
    authorInput.value = post.autor;
    contentInput.value = post.conteudo;

    const editForm = document.querySelector("#edit-post-form");

    editForm.addEventListener("submit", function(event) {
        event.preventDefault();


        function convertToBase64(file, callback) {
            const reader = new FileReader();
            reader.onload = function(event) {
                callback(event.target.result);
            };
            reader.readAsDataURL(file);
        }


        const salvarPostEditado = function(imagemBase64) {
            const editedPost = {
                id: post.id,
                autor: authorInput.value.trim(),
                titulo: titleInput.value.trim(),
                conteudo: contentInput.value.trim(),
                imagem: imagemBase64 || post.imagem 
            };

            const updatedPosts = posts.map(p => (p.id === editedPost.id ? editedPost : p));

            localStorage.setItem("posts", JSON.stringify(updatedPosts));

            window.location.href = "index.html";
        };

        if (imageInput.files.length > 0) {
            const file = imageInput.files[0];
            convertToBase64(file, function(imagemBase64) {
                salvarPostEditado(imagemBase64);
            });
        } else {
            salvarPostEditado(null);
        }
    });
});
