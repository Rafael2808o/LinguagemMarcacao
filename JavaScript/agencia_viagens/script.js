// Menu hamburguer
const botaoHamburguer = document.querySelector('#btn-hamburguer');
const menuMobile = document.querySelector("#menu-mobile");

botaoHamburguer.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
});

// selecionar os elementos
const gatilhoDropDownWeb = document.querySelector("#gatilho-dropdown-web");
const menuDropDownWeb = document.querySelector("#menu-dropdown-web");

// Mobile
const gatilhoDropDownMobile = document.querySelector("#gatilho-dropdown-mobile");
const menuDropDownMobile = document.querySelector("#menu-dropdown-mobile"); 

// Adicionar eventos de clique aos gatilhos
gatilhoDropDownWeb.addEventListener("click", (evento) => {
    evento.stopPropagation(); // impede que o evento vaze
    menuDropDownWeb.classList.toggle("hidden");
    menuDropDownMobile.classList.add("hidden"); // garantir que o menu mobile feche
});

// Menu mobile
gatilhoDropDownMobile.addEventListener("click", (evento) => {
    evento.stopPropagation(); // impede que o evento vaze
    menuDropDownMobile.classList.toggle("hidden");
    menuDropDownWeb.classList.add("hidden"); // garantir que o menu web feche
});

// Fechar os menus dropdown ao clicar fora deles
document.addEventListener("click", () => {
    menuDropDownWeb.classList.add("hidden");
    menuDropDownMobile.classList.add("hidden");
});

// Movimentando o carrossel
// Selecionar os elementos
const containerSlides = document.querySelector("#carrossel-slides");
const todosSlides = document.querySelectorAll(".slide-carrossel");
const btnAnterior = document.querySelector("#btn-anterior");
const btnProximo = document.querySelector("#btn-proximo");

let slideAtual = 0;
const totalSlides = todosSlides.length;

// funcao principal 
function atualizarCarrossel(){
    let valorTransform = `translateX(-${slideAtual * 100}%)`;
    containerSlides.style.transform = valorTransform;
}

btnAnterior.addEventListener("click", () => {
    slideAtual--;
    if(slideAtual < 0){
        slideAtual = totalSlides - 1;
    }
    atualizarCarrossel();
});

btnProximo.addEventListener("click", () => {
    slideAtual++;
    if(slideAtual >= totalSlides){
        slideAtual = 0;
    }
    atualizarCarrossel();
});

// Inicializando carrossel
atualizarCarrossel();