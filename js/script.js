import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber} from './utils.js'

//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//events

/*3 maneiras de criar e atribuir função à um evento
-----------FORMA 1-----------
form.onsubmit = function() {}

-----------FORMA 2-----------
form.onsubmit = () => {}

-----------FORMA 3-----------
form.onsubmit = handleSubmit

function handleSubmit() {}
*/

//a função só será executada quando clicarmos no botão de submit
form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
} 

inputWeight.oninput = function () {
    AlertError.close()
}
inputHeight.oninput = function () {
    AlertError.close()
}

//função modal
function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
}