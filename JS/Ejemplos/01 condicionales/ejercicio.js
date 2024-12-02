const edades = [5, 12, 17, 25, 70];
let niños=0 ,adolecente=0, adulto=0, adulto_mayor=0

for(edad of edades){
    if(edad <= 5){
        niños++;
        console.log(`con ${edad} años eres un niño`)
    }else if(edad <= 12){
        niños++;
        console.log(`con ${edad} años eres un niño`)
    }else if(edad <=17){
        adolecente++;
        console.log(`con ${edad} años eres un adolecente`)
    }else if(edad <=25){
        adulto++;
        console.log(`con ${edad} años eres un adulto`)
    }else{
        adulto_mayor++;
        console.log(`con ${edad} años eres un adulto mayor`)
    }
}
console.log(`resumen:
    niños:${niños}, 
    adolecentes:${adolecente},
    adultos:${adulto},
    adulto mayor:${adulto_mayor}`)