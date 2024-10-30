/**
 * Escreva um programa que receba um nome e verifique se o mesmo começa com a letra "A".
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const name = prompt('Qual o nome? ')
const searchLetter = 'a'
if (name.charAt(0).toLowerCase() === searchLetter.toLowerCase()) {
    console.log(`O nome '${name}' começa com ${searchLetter.toUpperCase()}!!!`)
} else {
    console.log(`O nome '${name}' não começa com ${searchLetter.toUpperCase()}!!!`)
}
