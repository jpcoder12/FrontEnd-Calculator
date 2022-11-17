// max chars in the output is 15
let val1 = ''
let val2 = ''
let outputDisplay = ''
let answer = ''
// mode dictates what to do when a function button is clicked. (2 modes: primary & secondary)
let mode = 'primary'
const setOutput = (num) => {
    // If this is the first set of numbers, append to outputDisplay. 
    // you cannot go beyond 15 chars so it will just not take your selection
    if (mode == 'primary'){
        if (outputDisplay.length <= 14){
            outputDisplay == '0' ? outputDisplay = '' :
            outputDisplay+= num
            document.querySelector("#output-text").innerHTML = outputDisplay
        } 
    }
}

const clearOutput = () => {
    // if the outputDisplay is already 0, then both variables to perform ops are cleared. 
    // if the outputDisplay is not clear, this function just clears the current output to 0.
    
}