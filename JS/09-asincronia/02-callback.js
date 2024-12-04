function myDisplayer(some){
    console.log(some);
}

function esPrimo(num){
    console.log(`${num} es UN numero primo.`);
}

function esPar(num){
    return num % 2 === 0;
}

//simulemos que se consulta la pagina de antesedentes de la policia 
// esta requiere el num de cedula y nos devuelve si la persona con ese num
// tiene antecedentes 
const consultarPolicia = Callback => {
    setTimeout(() => {
        const segDesde1970 = Math.floor(Date.now()/ 1000)
        if (!Callback(segDesde1970)) {
            console.log(segDesde1970 +"No tiene antecedesntes")
        } else {
            console.log(segDesde1970 + "Tienes antecedentes")
        }
    }, 2000);
}




function myCalculator(num1,num2 ,funcCallback){
    let sum = num1 + num2 ;
    funcCallback(sum);
}
console.log("INICIO\n");
myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, esPrimo);


consultarPolicia(myDisplayer);
consultarPolicia(esPrimo);
let tiempo = 3;
for(let i =1 ; i <= 7; i++){
    setTimeout( i => {
        console.log("en ejecución :" + i)
        consultarPolicia(esPar)
    }, tiempo++);
}

console.log("FIN\n");