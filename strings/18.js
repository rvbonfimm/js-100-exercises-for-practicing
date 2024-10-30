/**
 * Crie um programa que receba uma frase e substitua todas as letras "a" por "e".
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const phrase = prompt('Qual a frase? ')
const replacedPhrase = phrase.replace(/a/gi, 'e')
console.log(replacedPhrase)
