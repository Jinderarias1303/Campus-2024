const F_pactada = new Date(2024, 9, 10);

const F_entrega = new Date(2024, 11,10);

//calcular cuanto tiempo a pasado 
const milliDia = 1000 * 60 * 60 * 24;
let diferencia_dias =  console.log(Math.floor((F_entrega.getTime() - F_pactada.getTime()))/ milliDia); 



function multa(){
    if (diferencia_dias <= 3){
        console.log("multa menor que tres dias: " + diferencia_dias * 7000)
    }else {
        console.log("multa mayor que cuatro dias: " + (diferencia_dias * 1000))
    }
}
multa()

//innerHTML