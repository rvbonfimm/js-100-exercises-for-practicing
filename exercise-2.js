const prompt = require('prompt-sync')({sigint: true})

const value1 = Number(prompt('Valor 1: '))
const value2 = Number(prompt('Valor 2: '))
const arithmeticAverage = (value1 + value2) / 2
console.log(`Result: ${arithmeticAverage}`)
