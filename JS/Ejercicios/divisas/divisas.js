const  divisa = `https://cdn.dinero.today/api/latest.json`

fetch(divisa)
.then((resp)=> resp.json())
.then((d)=>{
    console.log(d)
})
.then((data)=>{
    data.rates.foreach((divisas))
    console.log(divisas)
})