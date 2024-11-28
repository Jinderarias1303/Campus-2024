let str = "campus Lands ";
//con for 
for(let i=0; i < str.length; i++) {
    let letra = str[i];

    if (letra === "a") break;
    console.log(letra);
    

}
let vocales = "aeiou";

for(let i=0; i < str.length; i++) {
    let letra = str[i];
    
    if (vocales.includes(letra)) continue;
    console.log(letra);
    
}

//con for .. of
// for(let letra of str){
//     console.log(letra);
// }
/* everiguar si una cadena es palindroma */
// debe usar ciclos NOUSAR FUNCIONES DE CADENA