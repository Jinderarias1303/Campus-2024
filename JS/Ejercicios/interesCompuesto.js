/*
enunciado
*/
const encabezadoConsola = function(){
    let titulo = "AÑO\t\tInvercion";
    console.log(titulo);
    console.log("-".repeat(titulo.length + 3));
}
const cuerpoConsola = (anio, valor) => console.log(`${anio}\t\t $${valor}`);

const pieConsola = () => console.log("=".repeat(20));

function encabezadoWeb(){
    document.write(`<tr>
            <th>AÑO</th>
            <th>INVERCIÓN</th>
        </tr>`)
};

const pieWeb = () => document.write(`</table>`);
const cuerpoWeb = function(year, inv){
    let background = year % 2 == 0 ?"white" : "#DAF7A6";
    let fila = `<tr style='background: ${background}'>
                    <td style='text-align: center;'>${year}</td>
                    <td style='text-align: right;'>$${inv}</td>
                </tr>`;
    document.write(fila);
};
function rendimiento(inversion, interes, tiempo){
        encabezadoConsola();
        encabezadoWeb();
    for (let i = 1; i <= tiempo; i++){
        let final = Number( (inversion  * (1 + interes)).toFixed(2));
        cuerpoConsola(i,final);
        cuerpoWeb(i, final);
        inversion = final;
    }
    pieConsola();
    pieWeb();
}


let inversion = Number(prompt("valor de la inverción inicial?",1000.00));

const INTERES = 0.05;

const TIEMPO = 10;

rendimiento(inversion, INTERES, TIEMPO);