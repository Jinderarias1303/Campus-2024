const A =  [
    {a: "A  enviado de 1"}
    ]

    const B =  [
        {b: "B  enviado de 2"}
        ]

        const C =  [
            {c: "C  enviado de 4"}
            ]
            
            const D =  [
                {d: "D  enviado de 5"}
                ]
                
                const E =  [
                    {e: "E  enviado de 6"}
                    ]

                    const F =  [
                        {f: "F  enviado de 3"}
                        ]

                        const G =  [
                            {g: "G  enviado de 7"}
                            ]

                            const H =  [
                                {h: "H  enviado de 7"}
                                ]

    const getA = () => {
        return A;
    }

    const llamando_A = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (A.length > 0){
                    resolve (A);
                } else {
                    reject("Error sin nada en a ");
                }
            }, );
            
        })
    };

    const getB = () => {
        return B;
    }

    const llamando_B = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (B.length > 0){
                    resolve (B);
                } else {
                    reject("Error sin nada en b ");
                }
            }, );
            
        })
    };

    const getC = () => {
        return C;
    }

    const llamando_C = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (C.length > 0){
                    resolve (C);
                } else {
                    reject("Error sin nada en b ");
                }
            }, 5000);
            
        })
    };

    const getD = () => {
        return D;
    }

    const llamando_D = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (D.length > 0){
                    resolve (D);
                } else {
                    reject("Error sin nada en d ");
                }
            },3000);
            
        })
    };

    const getE = () => {
        return E;
    }

    const llamando_E = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (E.length > 0){
                    resolve (E);
                } else {
                    reject("Error sin nada en d ");
                }
            },5000);
            
        })
    };

    const getF = () => {
        return F;
    }

    const llamando_F = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (E.length > 0){
                    resolve (F);
                } else {
                    reject("Error sin nada en  f");
                }
            },7000);
            
        })
    };

    const getG = () => {
        return G;
    }

    const llamando_G = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (G.length > 0){
                    resolve (G);
                } else {
                    reject("Error sin nada en  g");
                }
            },7000);
            
        })
    };
    const getH = () => {
        return H;
    }

    const llamando_H = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if (H.length > 0){
                    resolve (H);
                } else {
                    reject("Error sin nada en  h");
                }
            },9000);
            
        })
    };
console.log("INICIO");
llamando_A(getA)
                .then(cosa1 => console.log(cosa1))
                .catch(err => console.error(err));
llamando_B(getB)
                .then(cosa1 => console.log(cosa1))
                .catch(err => console.error(err));  
llamando_C(getC)
                .then(cosa1 => console.log(cosa1))
                .catch(err => console.error(err));
llamando_D(getD)
                .then(cosa1 => console.log(cosa1))
                .catch(err => console.error(err));
llamando_E(getE)
                .then(cosa1 => console.log(cosa1))
                .catch(err => console.error(err));
llamando_F(getG)
                .then(cosa1 => console.log(cosa1))
                .catch(err => console.error(err));
llamando_H(getH)
                .then(cosa1 => console.log(cosa1))
                .catch(err => console.error(err));
console.log("FIN")
                