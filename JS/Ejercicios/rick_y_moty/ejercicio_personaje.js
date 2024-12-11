// traer contenido del api 
const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
.then((resp)=> resp.json())
.then((d)=>{
    console.log(d)
})
.then((data) => {

    data.results.forEach((personaje) => {
        document.write(`
            <div class="cont">
            
            </div>
            `)
    });
})
.catch((error) => {
    console.error('Error al obtener los datos:', error);
});

