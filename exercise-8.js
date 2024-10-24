/**
 * Fórmula de bhaskara
 * ax² + bx + c = 0
 * Etapa 1: calcular discriminante (valor numérico de delta)
 * Etapa 2: se discriminante > 0, possui duas raízes reais; se = 0, possui apenas uma; senão, não há o que calcular
 * Discriminante (ou delta): b² - 4.a.c
 * Raiz 1 (x1): -b + raiz(delta) / 2.a
 * Raiz 2 (x2): -b - raiz(delta) / 2.a
 */
const promptSync = require('prompt-sync')
const prompt = promptSync({ sigint: true })

const a = parseFloat(prompt('Valor para a: '))
const b = parseFloat(prompt('Valor para b: '))
const c = parseFloat(prompt('Valor para c: '))
const delta = Math.pow(b, 2) - 4 * a * c

console.log(`Delta: ${delta}`)
if (delta > 0) {
    const x1 = ((-b + Math.sqrt(delta)) / (2 * a))
    const x2 = ((-b - Math.sqrt(delta)) / (2 * a))
    console.log(`The real roots are: ${x1} and ${x2}`)
} else if (delta === 0) {
    const x = -b / (2 * a)
    console.log(`The real root is: ${x}`)
} else {
    console.log("There is no real roots to be calculated")
}

/**
 * Testes de exemplo:
 * Input = 
 * Res = 
 */
