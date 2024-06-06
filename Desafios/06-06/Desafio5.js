// Escreva uma função que retorne a soma de todos os números pares em um array de números

function somaPares(array) {
    return array.reduce((acumulador, numero) => numero % 2 === 0 ? acumulador + numero : acumulador, 0)
}

console.log(somaPares([2, 4, 6, 5, 1]))