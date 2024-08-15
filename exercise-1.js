const prompt = require('prompt-sync')({ sigint: true })

const value1 = Number(prompt('Valor 1: '))
const value2 = Number(prompt('Valor 2: '))

console.log(`Soma: ${value1 + value2}`)
console.log(`Subtração: ${value1 - value2}`)
console.log(`Multiplicação: ${value1 * value2}`)
console.log(`Divisão: ${value1 / value2}`)
