

document.getElementById('rectangle-btn').addEventListener('click',function(){
    const rectangleWidth = getInputFieldValueById('width-input-field')
    const rectangleLength = getInputFieldValueById('length-input-field')
    if(isNaN(rectangleWidth) || isNaN(rectangleLength)){
        alert("Please insert a number")
        return
    }
    const area = rectangleWidth * rectangleLength
    setTextValueById('rectangle-area',area)

    setEntryCalculation('Rectangle', area)
})