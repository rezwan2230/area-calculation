
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const a_AxixInput = getInputFieldValueById('a-axix-input')
    const b_AxixInput = getInputFieldValueById('b-axix-input')
    if(isNaN(a_AxixInput) || isNaN(b_AxixInput)){
        alert("Please insert a number")
        return
    }
    const area = Math.PI * a_AxixInput * b_AxixInput
    const areaTwoDecimal = area.toFixed(2)
    setTextValueById('ellipse-area',areaTwoDecimal)

    setEntryCalculation('Ellipse', areaTwoDecimal)
})
