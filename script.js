// max chars in the output is 15
let val1 = ''
let val2 = ''
let outputDisplay = ''
let answer = ''
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
    // if the outputDisplay is not clear, this function just clears the current output to 0.
    if (outputDisplay == '0'){
        val1 = ''
        val2 = ''
        mode = ''
        answer = ''
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
    if (val2 != ''){
        console.log('additonal calculation...')
        calculator()
        val1 = Number(answer)
    } else {
        val1 = Number(outputDisplay)
    }
    val2 = ''
    console.log('Change Mode', val1, mode, val2)
    outputDisplay = ''
}

const calculator = () => {
    val2 = Number(outputDisplay)
    console.log('Calculating:', val1, mode, val2)
    if (mode == '+'){
        answer = String(Number(val1) + Number(val2))
        document.querySelector("#output-text").innerHTML = answer
        val1 = Number(answer)
        
    } else if (mode == '-'){
        answer = String(Number(val1) - Number(val2));
        document.querySelector("#output-text").innerHTML = answer;
        val1 = Number(answer)
    }
    else if (mode == '×'){
        answer = String(Number(val1) * Number(val2));
        document.querySelector("#output-text").innerHTML = answer;
        val1 = Number(answer)
    }
    else if (mode == '÷'){
        answer = String(Number(val1) / Number(val2));
        document.querySelector("#output-text").innerHTML = answer;
        val1 = number(answer)
    }
    val2 = ''
    console.log('after calc: ', val1)
}