// max chars in the output is 15
let val1 = ''
let val2 = ''
let outputDisplay = ''
let answer = ''
stage = 'primary'
// mode dictates what to do when a function button is clicked. (2 modes: primary & secondary)
let mode = '' // whether it's + - x or /
const setOutput = (strVal) => {
    // If this is the first set of numbers, append to outputDisplay. 
    // you cannot go beyond 15 chars so it will just not take your selected button's input
    if (outputDisplay.length <= 14){
        if (outputDisplay == '0'){
            outputDisplay = ''
        }
        outputDisplay += strVal
        document.querySelector("#output-text").innerHTML = outputDisplay
    } 
}

const clearOutput = () => {
    // if the outputDisplay is already 0, then both variables to perform ops are cleared and the stage is set to primary
    // if the outputDisplay is not clear, this function just clears the current output to 0, and the first value is still added to calculation.
    if (outputDisplay == '0'){
        val1 = ''
        val2 = ''
        mode = ''
        answer = ''
        document.querySelector("#preview-text").innerHTML = `${val1} ${mode} ${val2}`;
        document.querySelector("#output-text").innerHTML = outputDisplay
    } 
    else if (outputDisplay != '0'){
        outputDisplay = '0'
        document.querySelector("#output-text").innerHTML = outputDisplay
    }
    console.log('Clear', val1, mode, val2)
}

const changeMode = inputmode => {
    // if stage is primary, the mode is changed and val1 is set to the current output displayed
    // if stage is secondary, val1 becomes what the current mode's calc would be and we remain on secondary stage. 
    mode = inputmode
    console.log(stage)
    if (stage == 'primary'){
        val1 = Number(document.querySelector("#output-text").innerHTML)
        console.log(val1)
        stage = 'secondary'
    } else if (stage = 'secondary'){
        calculator()
        val1 = Number(answer)
        outputDisplay = String(val1)
        stage = 'primary'
    }
    
    outputDisplay = ''
}

const calculator = () => {
    if (stage == 'primary'){
        mode = '='
        val1 = Number(document.querySelector("#output-text").innerHTML)
        document.querySelector("#preview-text").innerHTML = `${val1} ${mode} ${val1}`;
    } else {
    val2 = Number(outputDisplay)
    console.log('Calculating:', val1, mode, val2)
    if (mode == '+'){
        answer = String(Number(val1) + Number(val2))
    } else if (mode == '-'){
        answer = String(Number(val1) - Number(val2));
    }
    else if (mode == 'x'){
        answer = String(Number(val1) * Number(val2));
    }
    else if (mode == '÷'){
        answer = String(Number(val1) / Number(val2));
    }
    // ensuring the answer fits inside the box
    if (answer.length > 14){
        answer = Number(answer).toFixed(4)
    }
    document.querySelector("#output-text").innerHTML = answer;
    document.querySelector("#preview-text").innerHTML = `${val1} ${mode} ${val2}`;
    val1 = Number(answer)
    stage = 'primary'
    val2 = ''
    console.log('after calc: ', val1)
}
}


// Logic for key presses
// https://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed
document.addEventListener('keydown', function(event) {
    let key = event.key; // "a", "1", "Shift", etc.
    console.log(key)
    let validKeyPress = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '^', '/', '*', '-', "+", 'Enter', 'Backspace']
    let found = validKeyPress.find(e => e == key)
    if (found){
        // check if key is number or one of the function presses
        if (isNaN(key)){
            switch (key){
                case '.':
                    setOutput(key)
                    break;
                case '/':
                    changeMode('÷')
                    break;
                case '^':
                    console.log('Feature not available yet.')
                    break;
                case '*':
                    changeMode('x')
                    break;
                case '+':
                    changeMode('+')
                    break;
                case '-':
                    changeMode('-')
                    break;
                case 'Enter':
                    calculator()
                    break;
                case 'Backspace':
                    clearOutput()
                    break;
                default:
                    null;
            }
        } else {
            setOutput(key)
        }
    }
})
