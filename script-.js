const piedra = document.getElementById("piedra");

const papel = document.getElementById("papel");

const tijera = document.getElementById("tijera");

const victory = document.getElementById("victory");
let contadorVictoria = 1;

const draw = document.getElementById("draw");
let contadorEmpate = 1;

const defeat = document.getElementById("defeat");
let contadorDerrota = 1;


function azar(){
    return Math.floor(Math.random() * 3);
}

function rock(){

    if (azar() === 0){
        alert("¡Piedra! Quedamos en empate");
        draw.textContent = contadorEmpate++;
    } else if (azar() === 1){
        alert("¡Papel! Te gane jaja");
        defeat.textContent = contadorDerrota++;
    } else if (azar() === 2){
        alert("¡Tijera! Oh rayos... Me has ganado");
        victory.textContent = contadorVictoria++;
    }
}

function paper(){
    if (azar() === 0){
        alert("¡Piedra! Oh rayos... Me has ganado");
        victory.textContent = contadorVictoria++;
    } else if (azar() === 1){
        alert("¡Papel! quedamos en empate");
        draw.textContent = contadorEmpate++;
    } else if (azar() === 2){
        alert("¡Tijera! Te gane jaja");
        defeat.textContent = contadorDerrota++;
    }
}

function shears(){
    if (azar() === 0){
        alert("¡Piedra! Te gane jaja");
        defeat.textContent = contadorDerrota++;
    } else if (azar() === 1){
        alert("¡Papel! Oh rayos... Me has ganado");
        victory.textContent = contadorVictoria++;
    } else if (azar() === 2){
        alert("¡Tijera! quedamos en empate");
        draw.textContent = contadorEmpate++;
    }
}

piedra.addEventListener("click", rock);

papel.addEventListener("click", paper);

tijera.addEventListener("click", shears);


