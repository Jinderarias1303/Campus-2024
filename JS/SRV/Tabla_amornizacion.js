
const cuerpoWeb = function(valorTotal, valorMensual, inversion, INTERES, TIEMPO) {
    let background = "#DAF7A6";
    let fila = `<tr style='background: ${background}'>
                        <td style='text-align: right;'>MONTO DE CREDITO</td>
                        <td style='text-align: right;'>${inversion}</td>
                        </tr>
                    <tr>
                        <td style='text-align: right;'>TASA DE INTERES(ANUAL)</td>
                        <td style='text-align: right;'>${TIEMPO * 100 + "%"}</td>
                    </tr>
                    <tr>
                        <td style='text-align: right;'> NUMERO DE PAGOS(MENSUALES)</td>
                        <td style='text-align: right;'>${INTERES}</td>
                    </tr>
                    <tr>
                        <td style='text-align: right;'>VALOR TOTAL</td>
                        <td style='text-align: right;'>${valorTotal}</td>

                    </tr>
                    <tr>
                        <td style='text-align: right;'>VALOR MENSUAL</td>
                        <td style='text-align: right;'>${valorMensual}</td>
                    </tr>
                    `;
    document.write(fila);
};

function encabezadoWeb() {
    let encabezado = `
        <tr>
        </tr>
    `;
    document.write(encabezado);
}


function rendimiento(inversion, interes, tiempo) {
    let valorTotal = inversion + (inversion * interes);
    let valorMensual = valorTotal / tiempo;
    cuerpoWeb(valorTotal, valorMensual, inversion, TIEMPO, INTERES);
}


document.write("<table border='1' style='width: 50%; '>");
encabezadoWeb();

let inversion = 150_000.00;
const INTERES = 0.12;
const TIEMPO = 12;


rendimiento(inversion, INTERES, TIEMPO);

document.write("</table>");
