/**
 * Faça um programa que receba uma palavra e exiba cada letra separadamente.
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const word = prompt('Qual a palavra? ')
for (let letter of word) {
    console.log(letter)
}

/** Second way of iterate over an array */
for (let index = 0; index < word.length; index++) {
    console.log(word[index])
}
