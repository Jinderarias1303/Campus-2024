// 1. Crear un array llamado mascotas para almacenar las mascotas.
// 2. Agregar un método dentro de cada objeto de mascota llamado adoptar, que
// cambie la propiedad adoptada a true.
// 3. Escribir una función que permita agregar una nueva mascota al refugio.
// 4. Crear una función para listar todas las mascotas y sus estados (adoptadas o no).
const mascotas = [];

function agg_mascota(nombre_mascota, edad_mascota,raza_mascota,adoptado){
    let nombre_mascota = prompt("ingrese el nombre del perr@? : ");
    let edad_mascota = prompt("Que edad tiene la mascota");
    let raza_mascota = prompt("De que raza es: ");
    if(prompt("el perr@ esta adoptado s/n").toLowerCase()==="s"){
        adoptado = true;
    } else{
        adoptado = false;
    }


mascotas.push({nombre:nombre_mascota,
                edad:edad_mascota,
                raza:raza_mascota, 
                adoptado:adoptado
});
}


if (mascotas.length === 0) {
    alert("El refugio de mascotas está vacío");
    document.write("El refugio de mascotas está vacío");
} else {
    let mensaje = "Mostrando mascotas:\n";
    mascotas.forEach(m => {
        mensaje += `Nombre: ${m.nombre}, Edad: ${m.edad}, Raza: ${m.raza}, Adoptado: ${m.adoptado ? "Sí" : "No"}\n`;
    });
    document.write(mensaje);
}


document.write("mascota agregada");
console.table(mascotas);