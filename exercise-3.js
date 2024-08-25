const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const v1 = Number(prompt('Valor 1: '))
const v2 = Number(prompt('Valor 2: '))
const v3 = Number(prompt('Valor 3: '))

const arithmeticAverage = (v1 + v2 + v3) / 3
console.log(`Res: ${arithmeticAverage}`)
