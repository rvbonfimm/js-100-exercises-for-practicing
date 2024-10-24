/**
 * Escreva um programa que calcule a velocidade média de um objeto, utilizando a fórmula
 * v = Δs/Δt,
 * onde v é a velocidade média,
 * Δs é a variação de espaço e
 * Δt é a variação de tempo
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const spaceVariation = parseFloat(prompt('Valor para a Variação de Espaço: '))
const timeVariation = parseFloat(prompt('Valor para a Variação de Tempo: '))
const speedAverage = spaceVariation / timeVariation
console.log(`The Speed Average is: ${speedAverage}km/h`)
