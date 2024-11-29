const funcFlecha =(cad) =>{
    let lcad = cad.length -1;
    for(let i = 0; i <= lcat / 2; i++){
        let lini = cat[i];
        let lfin = cad[lcat - i];

        if (lini !== lfin){
            return false;
        }
        
    }
    return true;
};
console.log(funcFlecha("reconocer") ? " es plaindrome" : "no es palindrome ")