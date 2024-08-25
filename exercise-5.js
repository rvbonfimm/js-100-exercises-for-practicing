const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const userWeigh = Number(prompt("Peso: "))
const userHeight = Number(prompt("Altura: "))
const IMC = ((userWeigh) / Math.pow(userHeight, 2))
console.log(`Res: ${IMC.toFixed(2)} kg/m²`)
