

document.getElementById('Pentagon-btn').addEventListener('click',function(){
    const pentagonPerimeter = getInputFieldValueById('perimeter-input')
    const pentagonApothem = getInputFieldValueById('apothem-input')
    if(isNaN(pentagonPerimeter) || isNaN(pentagonApothem)){
        alert("Please insert a number")
        return
    }
    const area = 0.5 * pentagonPerimeter * pentagonApothem
    setTextValueById('Pentagon-area',area)

    setEntryCalculation('Pentagon', area)
})
