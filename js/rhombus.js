
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const pDiagonal = getInputFieldValueById('p-diagonal-input')
    const qDiagonal = getInputFieldValueById('q-diagonal-input')
    if(isNaN(pDiagonal) || isNaN(qDiagonal)){
        alert("Please insert a number")
        return
    }
    const area = 0.5 * pDiagonal * qDiagonal
    setTextValueById('rhombus-area',area)

    setEntryCalculation('Rhombus', area)
})