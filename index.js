
const message = document.querySelector("#message");

function addMovie(event) {
    event.preventDefault();

    const inputField = document.querySelector("input").value;
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);

    document.querySelector("ul").appendChild(movie);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
    
    document.querySelector("input").value = "";
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