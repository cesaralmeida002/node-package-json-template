import {countries} from "./countries.js";

//Um script que adiciona um novo país.

const name = process.argv[2]
const code = process.argv[3]

if(!name || !code){
    console.log("Faltou o argumento")
}else{
    const novoPais ={
        name,
        code
    }
    countries.push(novoPais)
        console.log(countries[countries.length - 1])
}



