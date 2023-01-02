import { countries } from "./countries";

// um script que retorna todos os paises que começam, com a letra B

const busca = process.argv[2]

if (!busca) {
    console.log("Faltou o argumento")
}else{
    const resultado = countries.filter(countrie => countrie.name.toLowerCase()[0] === busca.toLowerCase())
    console.log(resultado)
}