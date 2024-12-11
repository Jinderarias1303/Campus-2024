

const main = document.getElementById("main")


async function datos(){

    try {
        const datos = await fetch("https://rickandmortyapi.com/api/character")
        if(!datos.ok) throw new Error("Error al traer los datos");
        const datosJSON = await datos.json();
        
        datosJSON.results.forEach(element => {
            main.innerHTML += `<div> <img src="${element.image}"> 
                </img> 
                <h2>${element.name}</h2> 
                <p>${element.status}</p>
                </div>`

            console.log(datosJSON)
        });
        
    } catch (error) {
        console.log(error.message)
    }
    

}

datos()












