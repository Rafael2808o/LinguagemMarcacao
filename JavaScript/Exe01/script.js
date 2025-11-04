    const hamburgerB = document.getElementById('hamburger-button');
    const mobileM = document.getElementById('mobile-menu');
    hamburgerB.addEventListener('click', () => {
        mobileM.classList.toggle('hidden');
    });

    const cB = document.getElementById('account-button');
    const aD = document.getElementById('account-dropdown');
    cB.addEventListener('click', (e) => {
        e.stopPropagation();
        aD.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
        if (!cB.contains(e.target) && !aD.contains(e.target)) {
            aD.classList.add('hidden');
        }
    });
    const mobil = document.getElementById('mobile-account-button');
    const mobile = document.getElementById('mobile-account-dropdown');
    mobil.addEventListener('click', () => {
        mobile.classList.toggle('hidden');
    });

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
atualizarCarrossel();
