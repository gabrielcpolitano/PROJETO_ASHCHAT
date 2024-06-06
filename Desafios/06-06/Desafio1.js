//Escreva uma função que ordene um array de números em ordem decrescente.
function decrescente(array){
    return array.sort((a,b) => b - a)
}

console.log(decrescente([1, 2, 5, 4]))