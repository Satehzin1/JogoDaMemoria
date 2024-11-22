const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");

let currentTime = 0;

// Quando a Janela carregar

window.onload = () => {
    
    spanPlayer.innerHTML = localStorage.getItem("player");

};

// função para iniciar o tempo 




