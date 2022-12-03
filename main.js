import { calcPolynomialEqtn } from './assets/util/utils.js'

const form = document.querySelector('#myform')

const inputA = document.querySelector('#coe-a')
const inputB = document.querySelector('#coe-b')
const inputC = document.querySelector('#coe-c')
const resultCont = document.querySelector('#resultCont')


form.onsubmit = (event) => {
    event.preventDefault()

    const a = inputA.value
    const b = inputB.value
    const c = inputC.value

    resultCont.innerHTML = calcPolynomialEqtn(a, b, c)
}