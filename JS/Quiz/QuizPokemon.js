const main = document.getElementById("main")
// const url = "https://pokeapi.co/api/v2/pokemon/{id-pokemon}"

async function datos() {

    try {
        const datos = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        if (!datos.ok) throw new Error("Error al traer los datos");
        const datosJSON = await datos.json();

        datosJSON.results.forEach(stats => {
            main.innerHTML += `<div class="cajaPrincipal">
            <div >
                <button class="bottonMiPokemon" id="ElegirPokemon">
                    Mi pokemon
                </button>
            </div>
            <div class="caja_imagen1">
            <img src="${sprites.other. official-artwork. front_default}">
            </div>
            <div class="cosas">
                <p>Name: ${name} </p>
                <p>Hp: ${stats[Hp].stat.name}  </p>
                <p>Attack: ${stats[Attack].stat.name} </p>
                <p>Defence: ${stats[Defence].stat.name} </p>
                <p>Speed: ${stats[Speed].stat.name}  </p>
            </div>
        </div>
    `

            console.log(datosJSON)
        });

    } catch (error) {
        console.log(error)
    }


}
// function miPokemon ( ()=>{
//     document.getElementById("ElegirPokemon")
// })

datos()

