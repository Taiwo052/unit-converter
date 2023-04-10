let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.innerHTML = `<h3>Length (Meter/Feet)</h3>
                        <p>${baseValue} meter(s) = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter(s)</p>`
    volumeEl.innerHTML = `<h3>Volume (Litres/Gallons)</h3>
                        <p>${baseValue} liter(s) = ${(baseValue * literToGallon).toFixed(3)} gallon(s) | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters</p>` 
    massEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>
                        <p>${baseValue} kilo(s) = ${(baseValue * kiloToPound).toFixed(3)} pound(s) | ${baseValue} pound(s) = ${(baseValue / kiloToPound).toFixed(3)} kilo(s)</p>`
                        
    
    inputEl.value = ""  
})

