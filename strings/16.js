/**
 * Crie um programa que leia duas palavras e as concatene, exibindo a palavra resultante.
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const word1 = prompt('Primeira palavra: ')
const word2 = prompt('Segunda palavra: ')
console.log(`${word1}${word2}`)
