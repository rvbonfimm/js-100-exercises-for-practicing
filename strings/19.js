/**
 * Escreva um programa que receba um nome e verifique se o mesmo começa com a letra "A".
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const name = prompt('Qual o nome? ')
if (name[0] === 'A') {
    console.log(`O nome '${name}' começa com A!!!`)
} else {
    console.log(`O nome '${name}' não começa com A!!!`)
}
