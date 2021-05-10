window.addEventListener('load', inicio);

var circ1, circ2, circ3, circ4


function inicio() {
    circ1 = document.getElementById('circ1');
    circ2 = document.getElementById('circ2');
    circ3 = document.getElementById('circ3');
    circ4 = document.getElementById('circ4');

    circulos();
}

function circulos() {
    // setInterval(agrandar, 100);
    // setInterval(reducir, 100);

    setInterval(moverIr, 1000);
    setInterval(moverVolver, 2000);
}


function agrandar() {
    circ1.style.width = '155px';
    circ1.style.height = '155px';
}

function reducir() {
    circ1.style.width = '150px';
    circ1.style.height = '150px';
}


// No logro acceder al justify-self desde js...por qué??
function moverIr() {
    circ1.style.justify-self = 'flex-start';
}

function moverVolver() {
    circ1.style.justify-self = 'flex-end';
}
