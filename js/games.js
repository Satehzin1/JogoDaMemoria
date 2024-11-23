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

// dobrando e embaralhando as cartas 
const duplicateCharacters = [...characters,...characters];
const shuflledArray = duplicateCharacters.sort(() =>    Math.random() - 0.5);

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

    card.addEventListener('click', revealCard);

    

    return card;

};

// função para carregar o jogo 
const loadGame = () => {
    
    duplicateCharacters.forEach((character) => {

        const card = createCard(character);

        grid.appendChild(card);
    });
};

// criar variaveis para a primeira e segunda carta
let firstCard = ""; 
let secondCard = "";

// função para revelar as cartas
const revealCard = ( {target} ) => {

    if (target.parentNode.className.includes("reveal-card")) {
        return;
    }
    
    if (firstCard === "") {
        
        target.parentNode.classList.add("reveal-card");
        firstCard = target.parentNode;
    } else if (secondCard === "") {

        target.parentNode.classList.add("reveal-card");
        secondCard = target.parentNode;

        checkCards();
    }

};

// função para checar as cartas
const checkCards = () => {


};

console.log("200");


