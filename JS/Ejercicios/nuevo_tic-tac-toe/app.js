let iniciar = document.getElementById('iniciar');
let botones = document.querySelectorAll('.botones .btn');
let nombres = document.querySelectorAll('.nombres ');
let siguiente = document.querySelector('h2');
let jugadorActual = '';
let turnos = 9;

document.getElementById('iniciar').addEventListener('click', () => {
    let guardar = document.getElementById('nombre').value;
    localStorage.setItem('nombre', guardar);
});

let ganador = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];


function handleClick(event) {
    const button = event.target;

    if (button.textContent !== "") return; 
    button.textContent = jugadorActual; 
    button.disabled = true; 

    
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    siguiente.textContent = `Siguiente jugador: ${jugadorActual}`;
}


function jugadorRandom() {
    jugadorActual = Math.random() < 0.5 ? 'X' : 'O';
    siguiente.textContent = `Jugador inicial: ${jugadorActual}`;
}


botones.forEach((boton) => {
    boton.addEventListener('click', handleClick);
});

iniciar.addEventListener('click', () => {
    botones.forEach((boton) => {
        boton.textContent = '';
        boton.disabled = false;
    });
    jugadorRandom();
});
