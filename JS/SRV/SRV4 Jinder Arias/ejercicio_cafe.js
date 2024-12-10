
function pedirGranos(){
return new Promise((resolve, reject) => {
    const exito = true
    if (exito){
        console.log("pidiendo granos.")
        setTimeout(()=>{
            resolve("granos obtenidos");
        }, 5000);
    }else{
        reject("Hubo un error al pedir los granos")
    }
})
};

function prepararCafe(){
    return new Promise((resolve, reject) => {
        const exito = true
        if (exito){
            console.log("preparando cafe")
            setTimeout(()=>{
                resolve("cafe preparado");
            }, 6000);
        }else{
            reject("Hubo un error al preparar el cafe")
        }
    })
}; 

function servirCafe(){
    return new Promise((resolve, reject) => {
        const exito = true
        if (exito){
            console.log("sirviendo cafe")
            setTimeout(()=>{
                resolve("cafe servido ");
            }, 6000);
        }else{
            reject("Hubo un error al servir el cafe el cafe")
        }
    })
};



async function hacerCafe(){
const granos = await pedirGranos();
console.log(granos);

const preparar = await prepararCafe();
console.log(preparar);

const servir = await servirCafe();
console.log(servir);

console.log("disfrutelo ... ")
}


hacerCafe()



