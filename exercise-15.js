/**
 * Volume de uma esfera à partir do raio
 * V = 4/3 π r³
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const raio = parseFloat(prompt('Valor para o raio: '))
const PI = Math.PI
const volume = (4 * PI * Math.pow(raio, 3)) / 3
console.log(`O volume é: ${volume.toFixed(2)}cm³`)
