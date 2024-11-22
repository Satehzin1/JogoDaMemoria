const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");
const grid = document.querySelector(".grid")

let currentTime = 0;

// Quando a Janela carregar

window.onload = () => {
    
    spanPlayer.innerHTML = localStorage.getItem("player");
    startTimer();
};

// função para iniciar o tempo 

const startTimer = () => {

    this.loop = setInterval(() => {
        
        currentTime++;

        timer.innerHTML = currentTime;

    }, 1000);

};

// array dos personagens das cartas 

const characters = [
    "carta1.png",
    "carta2.png",
    "carta3.png",
    "carta4.png",
    "carta5.png",
    "carta6.png",
    "carta7.png",
    "carta8.png",
    "carta9.png",
    "carta10.png"
];

// criar as cartas 

const createCard = () => {

    const card = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");
    
};



