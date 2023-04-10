
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
let lengthUnit = []
let volumeUnit = []
let massUnit = []
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener( "click", function(){
    lengthUnit.push(inputEl.value)
    volumeUnit.push(inputEl.value)
    massUnit.push(inputEl.value)
    inputEl.value = ""
    // console.log(lengthUnit)
    renderUnits()
    // renderUnits2()
    // renderUnits3()
    lengthUnit = []
    // volumeUnit = []
    // massUnit = []
})

function renderUnits() {
    let lengths = ""
    for ( let i = 0; i < lengthUnit.length; i++){
        lengthFeet = (lengthUnit[i] * 3.281).toFixed(3)
        lengthMeters = (lengthUnit[i] / 3.281).toFixed(3)
        lengths += `<h2>Length (Meter/Feet)</h2>
                    <p>${lengthUnit[i]} meters = ${lengthFeet} feet | ${lengthUnit[i]} feet = ${lengthMeters} meters</p>`
    }
    lengthEl.innerHTML = lengths
}

function renderUnits2() {
    let volumes = ""
    for ( let i = 0; i < volumeUnit.length; i++){
        volumeGallon = (volumeUnit[i] * 0.264).toFixed(3)
        volumeLitre = (volumeUnit[i] / 0.264).toFixed(3)
        volumes += `<h2>Volume (Litres/Gallons)</h2>
                    <p>${volumeUnit[i]} liters = ${volumeGallon} gallons | ${volumeUnit[i]} gallons = ${volumeLitre} liters</p>`
    }
    volumeEl.innerHTML = volumes
}

function renderUnits3() {
    let masses = ""
    for ( let i = 0; i < massUnit.length; i++){
        massPound = (massUnit[i] * 2.204).toFixed(3)
        massKilos = (massUnit[i] / 2.204).toFixed(3)
        Masses += `<h2>Mass (Kilograms/Pounds)</h2>
                    <p>${massUnit[i]} kilos = ${massPound} pounds | ${massUnit[i]} pounds = ${massKilos} kilos</p>`
    }
    massEl.innerHTML = masses
}
