(() => {
    const errorTypes = [
        'valueMissing',
        'customError',
        'badInput'
    ]

    const errorMessages = {
        coea: {
            valueMissing: 'Preencha o coeficiente por favor.'
        },
        coeb: {
            valueMissing: 'Preencha o coeficiente por favor.'
        },
        coec: {
            valueMissing: 'Preencha o coeficiente por favor.'
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

        const dontBreakSolution = input.nextElementSibling.matches('.box__result') 
        ? input.nextElementSibling.classList.remove('input__error') 
        : input.nextElementSibling.classList.add('input__error')
        
        const inputType = input.dataset.type
        

        if(!input.validity.valid) {
            input.classList.add('form__input--error')
            input.parentElement.querySelector('.input__error--invalid').innerHTML = showErrorMessage(inputType, input)
            input.nextElementSibling.classList.remove('input__error')
            
        } 
        if(input.validity.valid) {
            input.classList.remove('form__input--error')
            input.parentElement.querySelector('.input__error--invalid').innerHTML = ''
            dontBreakSolution
        }
    }

    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.addEventListener('blur', (event) => {
            validate(event.target)
        })
    })
})()