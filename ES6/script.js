// Diferença de variaveis em escopo em blocco

// var
var number = 1

console.log(number)

if(number === 1) {
    var number = 5
    console.log(number)
}

console.log(number)

// let
let numero = 2

console.log(numero)

if (numero === 2){
    let numero = 5
    console.log(numero)
}

console.log(numero)

// const
const num = 3

console.log(num)

if (num === 3){
    const num = 5
    console.log(num)
}

console.log(num)

// 2 arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b


console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(greeting("Matheus"))
console.log(greeting())

const testeArrow = () => console.log("testou")

testeArrow()

const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function (){
            console.log(self)
            console.log('Username: ' + self.name)
        }, 4000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 4000)
    }
}

user.sayUserName()
user.sayUserNameArrow()

// 3 filter
const array = [1, 2, 3, 4, 5]

const highNumbers = array.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)