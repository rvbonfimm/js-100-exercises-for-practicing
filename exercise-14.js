/**
 * Escreva um programa que leia a posição x e y de dois pontos no plano cartesiano,
 * e calcule a distância entre ambos.
 * dAB² = (xB – xA)² + (yB – yA)²
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const xA = parseInt(prompt('Valor para a coordenada xA: '))
const xB = parseInt(prompt('Valor para a coordenada xB: '))
const yA = parseInt(prompt('Valor para a coordenada yA: '))
const yB = parseInt(prompt('Valor para a coordenada yB: '))

const diffX = xB - xA
const diffY = yB - yA
const distancia = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))

console.log(`A distância entre as duas coordenadas é de: ${distancia}`)
