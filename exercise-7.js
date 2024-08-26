/**
 * Área de um círculo
 * A = PI * r²
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const radius = prompt('Qual o raio? ')
const area = Math.PI * Math.pow(radius, 2)
console.log(`Area = ${area}`)

/**
 * Testes de exemplo:
 * Input = 8
 * Res = 201.06192982974676
 */
