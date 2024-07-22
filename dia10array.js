const array = []
const indices = []
let contadorIndice = 0

const numeroProcurado = parseInt(prompt("Digite um número a ser procurado:"));

for (let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt("Digite o elemento" +  (i+1) + ": "));
    array [i] = elemento
}

for (let i = 0; i < 10; i++){
    if (array[i] === numeroProcurado) {
        indices[contadorIndice] = i
        contadorIndice++
    }
}


console.log ("O numero " + numeroProcurado + " foi encontrado nos ìndices:" + indices );



//////////////////////////////////////////////////////////////////////////////////////////////////////////


let array1 = []
let arrayInvertido = []

for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt("Digite o " + (i + 1) + "° número"))
    array1 [i] = numero
}

console.log("Array original: " + array)



//////////////////////////////////////////////////////////////////////////////////////////////////////////



let contador = 4

for(let i = 0; i < 5; i++) {
    arrayInvertido[i] = array1[contador]
    contador--   
}

console.log("Array invertido: " + arrayInvertido)