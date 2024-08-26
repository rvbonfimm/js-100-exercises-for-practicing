/**
 * Perímetro de um círculo
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const radius = Number(prompt('Qual o raio? '))
const PI = 3.14159265359
const circlePerimeter = 2 * PI * radius
console.log(circlePerimeter)

/**
 * Testes exemplo:
 * Raio = 2
 * Resultado esperado = 12.56637061436
 */
