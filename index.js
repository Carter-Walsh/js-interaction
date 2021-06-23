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
    message.textContent = "Movie deleted!";
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    console.log(event);

    if (event.target.classList.contains("checked")) {
        message.textContent = "Movie watched!";
    } else {
        message.textContent = "Movie added back!";
    }
}

document.querySelector("form").addEventListener("submit", addMovie);