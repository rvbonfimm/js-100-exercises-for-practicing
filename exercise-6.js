/**
 * Perímetro de um círculo
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const radius = Number(prompt('Qual o raio? '))
const circlePerimeter = 2 * Math.PI * radius
console.log(circlePerimeter.toFixed(2))

/**
 * Testes exemplo:
 * Raio = 2
 * Resultado esperado = 12.56637061436
 */
