/**
 * Escreva um programa que calcule o perímetro e a área de um triângulo, utilizando as fórmulas
 * P = a + b + c e
 * A = (b * h) / 2,
 * onde a, b e c são os lados do triângulo e h é a altura relativa ao lado b.
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const a = parseFloat(prompt('Valor para a: '))
const b = parseFloat(prompt('Valor para b: '))
const c = parseFloat(prompt('Valor para c: '))
const altura = b
const perimetro = a + b + c
const area = (b * altura) / 2
console.log(`Perímetro: ${perimetro}`)
console.log(`Área: ${area}`)
