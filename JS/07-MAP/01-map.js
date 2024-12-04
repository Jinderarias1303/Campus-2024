const mapa = new Map();
//agregar una llave -valor en el mapa
mapa.set("123", "Warllen");
mapa.set("396", "Ada");
mapa.set("133", "Nicolas");
console.log("_".repeat(50));

//verificar si una llave existe en el mapa HAS

console.log(mapa.has("Laia"));

console.log("_".repeat(50));

//get() obtiene el valor de un mapa
console.log(mapa.get("123"));
console.log(mapa.get("555"));

console.log("_".repeat(50));
// rocorrer con for .. of 
for(let llave of mapa.keys()){
    console.log(llave+ " : " + mapa.get(llave));
}
console.log("_".repeat(50));

for(let [llave,valor] of mapa){
    console.log(llave+ " : " + valor);
}
console.log("_".repeat(50));
//recorrido con forEach
mapa.forEach((valor,llave)=> console.log(llave + " -> " + valor))

console.log("_".repeat(50));


console.log("tamaño " +  mapa.size)
mapa.delete("123")
console.log("_".repeat(50));

mapa.clear();
console.log("tamaño " + mapa.size)
console.log("_".repeat(50));
