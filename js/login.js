const form = document.querySelector(".login__form");
const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");

// função para acionar o botão jogar
const validateInput = ({target}) => {

    if (target.value.length > 2) {
        
        button.removeAttribute("disabled");
        return;
    }

    button.setAttribute("disabled", "")
;}

// Função para guardar o nome no local storage
const handleSubmit = (event) => {

    event.preventDefault();
    
    localStorage.setItem("player", input.value);
    
    input.value = "";

    window.location = "pages/game.html"

}; 




form.addEventListener('submit', handleSubmit);
input.addEventListener('input', validateInput);