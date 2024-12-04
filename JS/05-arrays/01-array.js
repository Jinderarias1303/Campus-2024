//creacion de un array
let frutas =["manzana","pera","uva","fresa","mango"]

//creacion con instancia aobjetos
let campers =new Array("Jinder", "Marlon","Jose","Nicolas");

let salas = new Array(3)
salas[0]="Spuntik"; 
console.log(salas[0])

//recorrer un array por POSICIONES.
for(let i=0;i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log("_".repeat(40));
//recorrido por elementos
for(fruta of frutas){
    console.log(fruta);
}
console.log("-".repeat(40)+ "forEach");
//froEach
frutas.forEach((f) => console.log(f + " criolla"));

//recorido con funciones LAMBDAS
console.log("-".repeat(40)+ "map");
frutas.map((f) => console.log(f + " argentina"))
// frutas.filter((f, pos)=> console.log(f+ "-" + pos));
// console.log(frutas.filter(f => {return f.length < 5}));
console.log("_".repeat(40)+ "map2");
frutas.filter(f => {return f.length < 5}).map(f => console.log(f));
