let carros = [];
//Agrega al final
carros.push("renault 4", "fiat","Volvo","Ferrari");
//Elimina al final
carros.pop();
//Elimina al inicio
carros.shift();
//Agrega al inicio
carros.unshift("Audi");
console.log(carros)
//Devuelve una porcion
console.log(carros.slice(1,3));
//Desde la posición elimine y luego agg
carros.splice(1,2,"Mercedes", "mazda","Nissan");
console.log(carros)

console.log("_".repeat(40))

console.log("JION: "+ carros.join("/ "));

console.log("_".repeat(40))

carros = carros.concat("Toyota","Mitsubishi",["Suzuki","Subaru"]);
carros.concat();
console.log(carros)

console.log("_".repeat(40))

console.log(carros.indexOf("Renault 4"));
console.log(carros.indexOf("Toyota"));
console.log(carros.includes("Renault 4"));

console.log("_".repeat(40))
let rta = carros.reduce((ant,curr)=> ant += curr.length <=5 ? `, ${curr}`: "" , ant= "");
console.log(rta);

console.log("_".repeat(40))

