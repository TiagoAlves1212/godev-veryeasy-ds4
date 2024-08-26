const btnCalc = document.querySelector('button')
const result = document.querySelector('#result')

btnCalc.addEventListener('click', () => {
    
    const array = inputNumber.value.split('').map((num) => num ** 2).join('')
    const result = document.querySelector('#result').innerHTML = array
})

const inputNumber = document.querySelector('#input-number')
inputNumber.addEventListener('keydown', (e) => {
    if (e.key === '-') {
        alert('não aceito números negativos!')
        inputNumber.value = ''
    }
})