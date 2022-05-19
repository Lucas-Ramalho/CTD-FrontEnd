let numeros = [1, 2, 4, 8]
let resultado = 0

for (const numero of numeros) {

    console.log(numero)
    resultado = numero + resultado
}

console.log("======RESULTADO DA SOMA DOS ELEMENTOS DO ARRAY======")
console.log(resultado)