function ponto1(){
    var placar = document.querySelector('#pt1');
    var pt1 = Number(placar.innerHTML);
    pt1++;
    placar.innerHTML = pt1;
}

function ponto2(){
    var placar = document.querySelector('#pt2');
    var pt2 = Number(placar.innerHTML);
    pt2++;
    placar.innerHTML = pt2;
}

function zerar(){
    var placar1 = document.querySelector('#pt1');
    var placar2 = document.querySelector('#pt2');
    if(placar1) placar1.innerHTML = '0';
    if(placar2) placar2.innerHTML = '0';
}

function basAddCasa(valor){
    var placar = document.querySelector('#bpt1');
    var bpt1 = Number(placar.innerHTML);
    bpt1 += valor;
    placar.innerHTML = bpt1;
}
function basAddVisitante(valor){
    var placar = document.querySelector('#bpt2');
    var bpt2 = Number(placar.innerHTML);
    bpt2 += valor;
    placar.innerHTML = bpt2;
}
function basMen1(){
    var placar = document.querySelector('#bpt1');
    var bpt1 = Number(placar.innerHTML);
    if(bpt1 > 0){
        bpt1--;
        placar.innerHTML = bpt1;
    }
}
function basMen2(){
    var placar = document.querySelector('#bpt2');
    var bpt2 = Number(placar.innerHTML);
    if(bpt2 > 0){
        bpt2--;
        placar.innerHTML = bpt2;
    }   
}

function zerarBasquete(){
    var placar1 = document.querySelector('#bpt1');
    var placar2 = document.querySelector('#bpt2');
    if(placar1) placar1.innerHTML = '0';
    if(placar2) placar2.innerHTML = '0';
}