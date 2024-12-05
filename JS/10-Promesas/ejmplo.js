const datos = [
{
    id:1,
    title: "iron man",
    year: 2008
},
{
    id: 2,
    title: "spiderman: homecoming",
    year: 2017
},
{
    id: 23,
    title: "Avenger: Endgame",
    year: 2019
}
]

//síncrono
const getDatos = ()  => {
    return datos;
}

// console.log("INICIO");
// console.log(getDatos());
// console.log("FIN")

//asincrono Callback
// const getDatosAsynCallback = (Callback) => {
//     setTimeout(function (){
//         return Callback();
//     }, 3000)
// }

// console.log("INICIO");
// getDatosAsynCallback(getDatos)
// console.log("FIN")


//promesa
const getDatosPromesa = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(function (){
            if (datos.length > 0){
                resolve (datos);
            } else {
                reject("Error sin datos");
            }
        }, 3000);
        
    })
};
console.log("INICIO");
getDatosPromesa()
                .then(datos => console.table(datos))
                .catch(err => console.error(err));
                console.log("FIN")