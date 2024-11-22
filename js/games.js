const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");
const grid = document.querySelector(".grid")

let currentTime = 0;

// Quando a Janela carregar

window.onload = () => {
    
    spanPlayer.innerHTML = localStorage.getItem("player");
    startTimer();

    loadGame();
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
    "carta1",
    "carta2",
    "carta3",
    "carta4",
    "carta5",
    "carta6",
    "carta7",
    "carta8",
    "carta9",
    "carta10"
];

// função para criar um elemento
const createElement = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;
    return element; 

};

// criar as cartas 
const createCard = (character) => {

    const card = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");

    front.style.backgroundImage = `url(../images/${character}.png)`;
    
    card.className = "card";
    front.className = "face front";
    back.className = "face back";

    card.appendChild(front);
    card.appendChild(back);

    return card;

};

// função para carregar o jogo 
const loadGame = () => {
    
    characters.forEach((character) => {

        const card = createCard(character);

        grid.appendChild(card);
    });
};