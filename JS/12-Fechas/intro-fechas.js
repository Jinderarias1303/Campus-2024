const ahora = new Date();
console.log(ahora);

const horaJeni = new Date(2001, 12, 18, 6, 0 ,0);
console.log(horaJeni);

const horaAnder = new Date(1997, 10, 18);
console.log(horaAnder);

const fechas = new Date();
fechas.setFullYear(2024);
fechas.setMonth(11);
fechas.setDate(8);

console.log(fechas);

console.log("dia Anderson: "+ horaAnder.getDay()); //dia ej 1  2  3 etc
console.log("cadena: "+ horaAnder.toDateString()); // formato
console.log("caneda hora actual" + horaAnder.toTimeString());  //hora
console.log("caneda hora actual corta: " + horaAnder.toLocaleDateString());  
console.log("milisegundos de anderson: " + horaAnder.getTime());   // cantida de milisengindos

const milliDia = 1000 * 60 * 60 * 24;
console.log(Math.floor((horaJeni.getTime() - horaAnder.getTime()))/ milliDia); 
