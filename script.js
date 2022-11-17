// max chars in the output is 15
let val1 = ''
let val2 = ''
let outputDisplay = ''
let answer = ''
// mode dictates what to do when a function button is clicked. (2 modes: primary & secondary)
let stage = 'primary' // primary = first number, secondary = second number in the operation
let mode = '' // whether it's + - x or /
const setOutput = (num) => {
    // If this is the first set of numbers, append to outputDisplay. 
    // you cannot go beyond 15 chars so it will just not take your selected button's input
    console.log(stage, mode)
    if (stage == 'primary'){
        if (outputDisplay.length <= 14){
            if (outputDisplay == '0'){
                outputDisplay = ''
            }
            outputDisplay += num
            document.querySelector("#output-text").innerHTML = outputDisplay
        } 
    }
    else if (stage == 'secondary'){

        if (outputDisplay.length <= 14){
            if (outputDisplay == '0'){
                outputDisplay = ''
            }
            outputDisplay += num
            document.querySelector("#output-text").innerHTML = outputDisplay
        }
    }
    
}

const clearOutput = () => {
    // if the outputDisplay is already 0, then both variables to perform ops are cleared and the stage is set to primary
    // if the outputDisplay is not clear, this function just clears the current output to 0.
    if (outputDisplay == '0'){
        val1 = ''
        val2 = ''
        stage = 'primary'
        mode = ''
        document.querySelector("#output-text").innerHTML = outputDisplay
    } 
    else if (outputDisplay != '0'){
        outputDisplay = '0'
        document.querySelector("#output-text").innerHTML = outputDisplay
    }
}

const changeMode = inputmode => {
    // if stage is primary, the mode is changed and val1 is set to the current output displayed
    // if stage is secondary, val1 becomes what the current mode's calc would be and we remain on secondary stage. 
    if (stage == 'primary'){
        stage = 'secondary'
        mode = inputmode
        console.log('mode changed to +')
        val1 = Number(outputDisplay)
        outputDisplay = '0'
    } else if (stage == 'secondary'){
        if (mode == '='){
            calculator()
        }
        
    }
}

const calculator = () => {
    switch (mode){
        case '+':
            val2 = outputDisplay
            answer = String(Number(val1) + Number(val2))
            document.querySelector("#output-text").innerHTML = answer
            state = 'primary'
            break
        default:
            null
            
    }
}