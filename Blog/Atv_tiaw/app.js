document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts");
    const postInfo = document.getElementById("post-info");
    const postContent = document.getElementById("post-content");

    let OBJ = localStorage.getItem("posts");
    let posts = JSON.parse(OBJ);
    
    if (postsContainer) {
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            
            const postTitle = document.createElement("h3");
            const postLink = document.createElement("a");
            postLink.className = "caixaA";
            postLink.href = `post.html?id=${post.id}`;
            postLink.textContent = post.titulo;
            postTitle.appendChild(postLink);
            
            const postContent = document.createElement("p");
            postContent.textContent = post.conteudo;
            
            postElement.appendChild(postTitle);
            postElement.appendChild(postContent);
            
            if (post.imagem) {
                const postImage = document.createElement("img");
                postImage.src = `./Assets/Img/${post.imagem}`;
                postImage.alt = post.titulo;
                postElement.appendChild(postImage);
            }
            
            postsContainer.appendChild(postElement);
        });
    } else if (postInfo && postContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));

        const post = posts.find(p => p.id === postId);

        if (post) {
            const today = new Date();

            const infoHTML = `
                <div class="post-info">
                    <div class="info-label">Nome:</div>
                    <div>${post.autor}</div>
                    <div class="info-label" style="margin-left: 20px;">Data:</div>
                    <div> ${today.toLocaleDateString()} </div>
                </div>
            `;

            const contentHTML = `
                <h2 style="color: #2e97b7;">${post.titulo}</h2>
                <p>${post.conteudo}</p>
            `;

            postInfo.innerHTML = infoHTML;
            postContent.innerHTML = contentHTML;
        }
    }
});



