const message = document.querySelector("#message");

function addMovie(event) {
    event.preventDefault();

    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    const deleteBtn = document.createElement("button");

    const inputField = document.querySelector("input").value;
    document.querySelector("ul").appendChild(movie);
    document.querySelector("input").value = "";

    movieTitle.addEventListener("click", crossOffMovie);
    deleteBtn.addEventListener("click", deleteMovie);
    
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);

    deleteBtn.textContent = "X";
    movieTitle.textContent = inputField;
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    event.target.textContent = "";
    message.textContent = `${event.target.parentNode.textContent} deleted!`;
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");

    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} has been watched!`;
    } else {
        message.textContent = `${event.target.textContent} has been added back!`;
    }
    
    revealMessage();
}

function revealMessage() {
    message.classList.remove("hide");

    setTimeout(function() {
        message.classList.add("hide");
    }, 1000);
}

document.querySelector("form").addEventListener("submit", addMovie);