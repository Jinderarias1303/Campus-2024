// function Ob_Ingredientes(){
//     return new Promise((resolve,reject)=>{
//         const exito = true
//         if(exito)
//         setTimeout(()=>{
//             resolve("Ingredientes Obtenidos")
//         }, 2000)
//         else {
//             reject("Error al obtener ingredientes");
//         }
//     })
// };

// function mc_Ingredientes(){
//     return new Promise((resolve,reject)=>{
//         const exito = true
//         if(exito)
//         setTimeout(()=>{
//             resolve("mezclando ingredientes")
//         },1000)
//         else {
//             reject("Error al obtener ingredientes");
//         }
//     })
// };

// function cocinar_Ingredientes(){
//     return new Promise((resolve,reject)=>{
//         const exito = true
//         if(exito)
//         setTimeout(() => {
//             resolve("preparando...")
//         }, 3000)
//         else {
//             reject("Error al obtener ingredientes");
//         }
//     })
// }

// async function receta() {
//     const obtener = await Ob_Ingredientes();
//     console.log(obtener);

//     const mezclar = await mc_Ingredientes();
//     console.log(mezclar);

//     const preparando = await cocinar_Ingredientes();
//     console.log(preparando);


//     console.log("receta lista ...")
// };