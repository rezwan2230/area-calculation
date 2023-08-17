
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldString = inputField.value
    const inputFieldValue = parseFloat(inputFieldString)
    inputField.value = ''
    return inputFieldValue
}

function setTextValueById(textId, area){
    document.getElementById(textId).innerText = area
}


function setEntryCalculation(shapeName, area){
    const calculationEntry = document.getElementById('calculation-entry')
    const p = document.createElement('p')

    const count = calculationEntry.childElementCount
    p.classList = 'my-2'
    p.innerHTML = `${count+1}.   ${shapeName} ${area}cm<sup>2</sup> <button class= "btn btn-success ml-2">Convert to m<sup>2<sup>`;
  
    calculationEntry.appendChild(p)
}