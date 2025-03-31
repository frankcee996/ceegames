function searchGames() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let games = document.querySelectorAll('.game');

    games.forEach(game => {
        let title = game.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slides[currentIndex].style.display = "block";
    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);


function searchGames() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let gamesList = document.querySelectorAll(".game");

    gamesList.forEach(game => {
        let title = game.getAttribute("data-title").toLowerCase();

        // If search bar is empty, show all games
        if (input.trim() === "") {
            game.style.display = "block";  
        } else {
            game.style.display = title.includes(input) ? "block" : "none";
        }
    });
}



// Function to Open Sidebar
function openMenu() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

// Function to Close Sidebar
function closeMenu() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}