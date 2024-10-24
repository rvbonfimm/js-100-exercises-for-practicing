/**
 * Escreva um programa que calcule a energia cinética de um objeto em movimento, utilizando a fórmula
 * E = (mv²) / 2,
 * onde E é a energia cinética,
 * m é a massa do objeto e
 * v é a velocidade.
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const objectMass = parseFloat(prompt('Valor para a massa do objeto: '))
const speed = parseFloat(prompt('Valor para a velocidade: '))
const cineticEnergy = (objectMass * (Math.pow(speed, 2))) / 2
console.log(`Cinetic energy is: ${cineticEnergy}J`)
