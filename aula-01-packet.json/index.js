import {countries} from "./countries.js";

const busca = process.argv[2]

//console.log(countries)

if(!busca){
    console.log("Faltou argumento de busca")
}else{
    const resultado = countries.filter((countrie) =>{
        return countrie.name.toLowerCase().includes(busca.toLowerCase())
    })
    if (resultado.length === 0) {
        console.log("País não encontrado")
    }else{
        console.log(resultado)
    }
}