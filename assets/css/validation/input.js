const errorTypes = [
    'valueMissing',
    'customError',
    'badInput'
]

const errorMessages = {
    coe: {
        valueMissing: 'Preencha o coeficiente por favor.',
        customError: 'Preencha o coeficiente por favor.',
        badInput: 'Utilize os operadores corretamente.'
    }
}

function showErrorMessage(inputType, input) {
    let message = ''

    errorTypes.forEach(error => {
        if(input.validity[error]) {
            message = errorMessages[inputType][error]
        }
    })

    return message
}

function validate(input) {
    const inputType = input.dataset.type
    
    if(!input.validity.valid) {
        input.classList.add('form__input--error')
        document.querySelector('.input__error').innerHTML = 'Deu certoooooooooo'
    }
}

const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
        validate(event.target)
    })
})