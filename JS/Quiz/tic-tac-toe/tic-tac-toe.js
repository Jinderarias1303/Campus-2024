document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".contenedor_principal1 .btn"); // Selecciona los botones del tablero
    const nextPlayerDisplay = document.querySelector("h2"); // Selecciona el h2 para mostrar el siguiente jugador
    const startButton = document.querySelector(".iniciar"); // Selecciona el botón de iniciar
    let currentPlayer = "";

    // Función para asignar un jugador inicial de forma aleatoria
    function setRandomPlayer() {
        currentPlayer = Math.random() < 0.5 ? "X" : "O";
        nextPlayerDisplay.textContent = `Siguiente turno: ${currentPlayer}`;
    }

    // Función para manejar el clic en los botones
    function handleClick(event) {
        const button = event.target;

        if (button.textContent !== "") return; // Si ya tiene un valor, no permite más clics
        button.textContent = currentPlayer; // Asigna X o O

        // Cambia al siguiente jugador
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        nextPlayerDisplay.textContent = `Siguiente jugador: ${currentPlayer}`;
    }

    // Inicializa el juego al presionar "Iniciar"
    startButton.addEventListener("click", () => {
        buttons.forEach((button) => {
            button.textContent = ""; // Limpia el tablero
            button.disabled = false; // Habilita todos los botones
        });
        
        setRandomPlayer(); // Asigna el jugador inicial
    });

    // Agrega el evento de clic a cada botón del tablero
    buttons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
});



