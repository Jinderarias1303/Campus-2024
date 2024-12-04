console.log("INICIO");

//PROCESO ASINCRONICO DOS 2 segundos despues 
setTimeout(() =>{
    console.log("Tarea asincrona completada 2 seg despues")
},2000);
setTimeout(() =>{
    console.log("Tarea asincrona completada 5 seg despues")
},5000);
setTimeout(() =>{
    console.log("Tarea asincrona completada 7 seg despues")
},7000);

console.log("FIN")