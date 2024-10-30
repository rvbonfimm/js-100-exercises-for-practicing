/**
 * Calcule o perímetro e a área de um retângulo, utilizando as fórmulas
P = 2(l + c) e
A = lc,
onde l é a largura e c é o comprimento
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const largura = parseFloat(prompt('Valor para a largura: '))
const comprimento = parseFloat(prompt('Valor para o comprimento: '))

const perimeter = 2 * (largura + comprimento)
const area = largura * comprimento
console.log("Perímetro: ", perimeter)
console.log("Área: ", area)
