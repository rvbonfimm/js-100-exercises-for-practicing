/**
 * Escreva um programa que calcule o trabalho realizado por uma força que atua sobre um objeto, utilizando a fórmula
 * T = F * d,
 * onde T é o trabalho,
 * F é a força aplicada e
 * d é a distância percorrida pelo objeto.
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const forca = parseFloat(prompt('Valor para a força: '))
const distancia = parseFloat(prompt('Valor para a distância: '))
const trabalhoRealizado = forca * distancia
console.log(`O trabalho realizado é de: ${trabalhoRealizado}Newton`)
