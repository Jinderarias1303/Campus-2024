const container = document.querySelector(".container");
const contador = document.getElementById("contador");

let varContador = 0;

container.addEventListener("click", evento => {
  // programe SOLO AQUI
    console.log(evento.target.classList)

    if(evento.target.classList[1] == "btn-info"){
        varContador.textContent = varContador++
    }
});

document.body.addEventListener("click", () => { console.log("click"); });