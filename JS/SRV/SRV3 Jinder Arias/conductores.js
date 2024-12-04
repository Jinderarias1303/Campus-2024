let conductores = [];
let nro_conductores = Number(prompt("¿Cuántos conductores tiene la empresa?"));

for (let i = 0; i < nro_conductores; i++) {
    let nombre_conductor = prompt(`Ingresa el nombre del conductor ${i + 1}:`);
    let kilometros_lunes = Number(prompt("¿Cuántos kilómetros recorrió el lunes?"));
    let kilometros_martes = Number(prompt("¿Cuántos kilómetros recorrió el martes?"));
    let kilometros_miercoles = Number(prompt("¿Cuántos kilómetros recorrió el miércoles?"));
    let kilometros_jueves = Number(prompt("¿Cuántos kilómetros recorrió el jueves?"));
    let kilometros_viernes = Number(prompt("¿Cuántos kilómetros recorrió el viernes?"));
    let kilometros_sabado = Number(prompt("¿Cuántos kilómetros recorrió el sábado?"));

    let ki_semana = (kilometros_lunes + kilometros_martes + kilometros_miercoles + kilometros_jueves + kilometros_viernes + kilometros_sabado)

    conductores.push({
        nombre: nombre_conductor,
        kilometros: {
            Lunes: kilometros_lunes,
            Martes: kilometros_martes,
            Miércoles: kilometros_miercoles,
            Jueves: kilometros_jueves,
            Viernes: kilometros_viernes,
            Sábado: kilometros_sabado,
            r_semana: ki_semana
        }
    });
}



function promedioPorDia() {

    console.log(conductores[0].kilometros.kilometros_lunes);

    let proKilometrajeLunes;
    let proKilometrajeMartes;
    let proKilometrajeMiercoles;
    let proKilometrajeJueves;
    let proKilometrajeViernes;
    let proKilometrajeSabado;


    for (let i = 0; i < conductores.length; i++) {
        proKilometrajeLunes += conductores[i].kilometros.kilometros_lunes;
        proKilometrajeMartes += conductores[i].kilometros_martes;
        proKilometrajeMiercoles += conductores[i].kilometros_miercoles;
        proKilometrajeJueves += conductores[i].kilometros_jueves;
        proKilometrajeViernes += conductores[i].kilometros_viernes;
        proKilometrajeSabado += conductores[i].kilometros_sabado;
    }
    console.log(proKilometrajeLunes);

    proKilometrajeLunes = proKilometrajeLunes / 6;
    proKilometrajeMartes = proKilometrajeMartes / 6;
    proKilometrajeMiercoles = proKilometrajeMiercoles / 6;
    proKilometrajeJueves = proKilometrajeJueves / 6;
    proKilometrajeViernes = proKilometrajeViernes / 6;
    proKilometrajeSabado = proKilometrajeSabado / 6;



    generarTabla2(proKilometrajeLunes, proKilometrajeMartes, proKilometrajeMiercoles, proKilometrajeJueves, proKilometrajeViernes, proKilometrajeSabado)
}


function generarTabla2(l, m, mm, j, v, s) {
    console.log(l, m, mm, j, v, s);

    // Encabezado de la tabla con los días de la semana
    document.write(`
        <table border='2' style='width:80%; margin-top: 20px;'>

    <thead>
        <tr style='background-color: #DAF7A6;'>
            <th style='text-align: center; padding: 8px;'>Lunes</th>
            <th style='text-align: center; padding: 8px;'>Martes</th>
            <th style='text-align: center; padding: 8px;'>Miércoles</th>
            <th style='text-align: center; padding: 8px;'>Jueves</th>
            <th style='text-align: center; padding: 8px;'>Viernes</th>
            <th style='text-align: center; padding: 8px;'>Sábado</th>
        </tr>
     </thead>` );

    // Cuerpo de la tabla
    document.write("<tbody>");
    document.write("<tr>");
    document.write(`<td style='text-align: center; padding: 8px;'>${l}</td>`);
    document.write(`<td style='text-align: center; padding: 8px;'>${m}</td>`);
    document.write(`<td style='text-align: center; padding: 8px;'>${mm}</td>`);
    document.write(`<td style='text-align: center; padding: 8px;'>${j}</td>`);
    document.write(`<td style='text-align: center; padding: 8px;'>${v}</td>`);
    document.write(`<td style='text-align: center; padding: 8px;'>${s}</td>`);
    document.write("</tr>");
    document.write("</tbody>");
    document.write("</table>");
}




// Función para generar la tabla hecha por gepeto
function generarTabla() {

    // Encabezado de la tabla con los días de la semana
    document.write(`
        <table border='2' style='width:80%; margin-top: 20px;'>

    <thead>
        <tr style='background-color: #DAF7A6;'>
            <th style='text-align: center; padding: 8px;'>Nombreeee</th>
            <th style='text-align: center; padding: 8px;'>Lunes</th>
            <th style='text-align: center; padding: 8px;'>Martes</th>
            <th style='text-align: center; padding: 8px;'>Miércoles</th>
            <th style='text-align: center; padding: 8px;'>Jueves</th>
            <th style='text-align: center; padding: 8px;'>Viernes</th>
            <th style='text-align: center; padding: 8px;'>Sábado</th>
            <th style='text-align: center; padding: 8px;'>Total <br> kilometros</th>
        </tr>
    </thead>` );


    // Cuerpo de la tabla
    document.write("<tbody>");
    conductores.forEach(conductor => {
        document.write("<tr>");
        // Mostrar el nombre del conductor
        document.write(`<td style='text-align: left; padding: 8px;'>${conductor.nombre}</td>`);

        // Mostrar los kilómetros recorridos cada día
        for (let dia in conductor.kilometros) {
            document.write(`<td style='text-align: center; padding: 8px;'>${conductor.kilometros[dia]}</td>`);
        }
        //mostrar el total del recorrido semanal
        // document.write(`<td style='text-align: center; padding: 8px;'>${conductor.kilometros.r_semana} </td>`);


        document.write("</tr>");
    });
    document.write("</tbody>");
    document.write("</table>");
}

// Llamamos a la función para generar la tabla
generarTabla();
promedioPorDia();

