

document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleBase = getInputFieldValueById('base-input-field')
    const triangleheight = getInputFieldValueById('height-input-field')
    if(isNaN(triangleBase) || isNaN(triangleheight)){
        alert("Please insert a number")
        return
    }
    const area = 0.5 * triangleBase * triangleheight
    setTextValueById('triangle-area',area)

    setEntryCalculation('Triangle', area)

})