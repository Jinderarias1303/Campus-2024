let conj = new Set();

console.log(conj.size);
console.log("_".repeat(40));

conj.add("Audi");
conj.add("Mercedes");
conj.add("Audi");
console.log(conj);
console.log("_".repeat(40));
conj.delete("Mercedes");
console.log(conj);

console.log("_".repeat(40));

console.log(conj.has("Mercedes")); //true si existe

console.log("_".repeat(40));

//recorridos : for of
for(let elem of conj){
    console.log(elem)
}
console.log("_".repeat(40));
//recorrido con for Each
conj.forEach(elem => console.log(elem));

console.log("_".repeat(40));

//value() devuelve un iterador con todos lo valores
console.log(conj.values());

console.log("_".repeat(40));

conj.clear();
console.log(conj.size)

console.log("_".repeat(40));
