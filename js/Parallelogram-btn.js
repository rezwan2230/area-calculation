
document.getElementById('Parallelogram-btn').addEventListener('click',function(){
    const ParallelogramBase = getInputFieldValueById('Parallelogram-base-input')
    const ParallelogramHeight = getInputFieldValueById('Parallelogram-height-input')
    if(isNaN(ParallelogramBase) || isNaN(ParallelogramHeight)){
        alert("Please insert a number")
        return
    }
    const area = ParallelogramBase * ParallelogramHeight
    setTextValueById('Parallelogram-area',area)

    setEntryCalculation('Parallelo.', area)
})