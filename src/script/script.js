let audio = document.querySelector("#mainAudio")
let audioFundo = document.querySelector("#audioFundo")
let _name = ""
let _fullName = ""
let selectedName = false
let presentationDestiny = false
let presentationExpression = false
let presentationMotivation = false
let destiny = false
let expression = false
let motivarion = false
let introductionExpression = false
let introductionMotivation = false
let ended = false
let months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
let dateBorn = {d: "", m: "", y:""}
let sumDate = {d: "", m: "", y:""}
let sumDestiny = 0

function $(element){
    return document.querySelector(element)
}

function starAnalyzing() {
    if(!selectedName){
        _name = document.querySelector("#inputName").value
        if(_name == ""){
            alert("escriba su nombre")
            return
        }
        selectedName = true
        starAnalyzing()
        return
    }
    if(!presentationDestiny){
        setAnalizingCalc()
        playPresentationDestiny()
        return
    }
    if(!destiny){
        playDestiny()
        return
    }
    if(!introductionExpression){
        playIntroductionExpression()
        return
    }
    if(!presentationExpression){
        _fullName = document.querySelector("#inputFullName").value
        if(_fullName == ""){
            alert("escriba su nombre")
            return
        }
        playPresentationExpression()
        return
    }
    if(!expression){
        playExpression()
        return
    }
    if(!introductionMotivation){
        playintroductionMotivation()
        return
    }
    if(!presentationMotivation){
        playPresentetionMotivation()
        return
    }
    if(!motivarion){
        playMotivarion()
        return
    }
    if(!ended){
        playEnded()
        return
    }

} 


function getDate(){
    let selecDay = document.querySelector("#inputDay")
    let selecMonth = document.querySelector("#inputMonth")
    let selecYear = document.querySelector("#inputYear")
    let selectedDay = selecDay.options[selecDay.selectedIndex].value
    let selectedMonth = selecMonth.options[selecMonth.selectedIndex].value
    let selectedYear = selecYear.options[selecYear.selectedIndex].value
    return [selectedDay, selectedMonth, selectedYear]
}


function checkInputs(){
    let [selectedDay, selectedMonth, selectedYear] = getDate()
    if(selectedDay == ""){
        alert("Pon tu día de nacimiento")
        return true
    }
    if(selectedMonth == ""){
        alert("Ingrese su mes de nacimiento")
        return true
    }
    if(selectedYear == ""){
        alert("Ingresa tu año de nacimiento")
        return true
    }
    return false
}


function calcDestiny(){
    let [selectedDay, selectedMonth, selectedYear] = getDate()
    let sDay = Number(selectedDay.toString()[0]) + Number(selectedDay.toString()[1]) 
    let sMonth = Number(selectedMonth.toString()[0]) + Number(selectedMonth.toString()[1]) 
    let sYear = Number(selectedYear.toString()[0]) + Number(selectedYear.toString()[1]) + Number(selectedYear.toString()[2]) + Number(selectedYear.toString()[3])
    let sumNumber = sDay + sMonth + sYear
    let sDestiny = synthesizeNumber(sumNumber)
    return sDestiny
}

function calcExpression(){
    let nameFull = _fullName.toLocaleLowerCase().replaceAll(" ", "").replaceAll("a", "").replaceAll("e", "").replaceAll("i", "").replaceAll("o", "").replaceAll("u", "")
    let sumNumber = 0
    nameFull.split("").forEach(letter=>{
        sumNumber += tableCabalistic[letter]
    })
    return synthesizeNumber(sumNumber)
}

function calcMotivation(){
    let nameFull = _fullName.toLocaleLowerCase().replaceAll(" ", "")
    let sumNumber = 0
    nameFull.split("").forEach(letter=>{
        switch (letter) {
            case "a": sumNumber += tableCabalistic[letter]; break;
            case "e": sumNumber += tableCabalistic[letter]; break;
            case "i": sumNumber += tableCabalistic[letter]; break;
            case "o": sumNumber += tableCabalistic[letter]; break;
            case "u": sumNumber += tableCabalistic[letter]; break;
            default:
                break;
        }
        
    })
    return synthesizeNumber(sumNumber)
}

function synthesizeNumber(number){
    let baseNum = Number(number)
    while (baseNum>9) {
        if(baseNum == 11 || baseNum == 22 || baseNum == 33){
            return baseNum
        }
        let baseSum = 0
        baseNum.toString().split("").forEach(num=>{
            baseSum += Number(num)
        })
        baseNum = baseSum
    }
    return baseNum
}
function playAndStop(){
    if(audio.paused){
        audio.play()
    } else {
        audio.pause()
    }
}
function muteAndDesmute(){
    console.log(audio.volume)
    if(audio.volume > 0){
        audio.volume = 0
    } else {
        audio.volume = 1
    }
}

function setAnalizingCalc(){
    let [selectedDay, selectedMonth, selectedYear] = getDate()
    let destiny = calcDestiny()

    document.querySelector("#analizingCalc").innerHTML = `
    <div> 
        <div>
            <span>${months[(selectedMonth - 1)]}</span>
            <span>-></span>
            <span>${selectedMonth[0]} + ${selectedMonth[1]}</span>
            <span>-></span>
            <span>${(Number(selectedMonth[0]) + Number(selectedMonth[1]))}</span>
        </div>
        <div>
            <span>${selectedDay}</span>
            <span>-></span>
            <span>${selectedDay[0]} + ${selectedDay[1]}</span>
            <span>-></span>
            <span>${(Number(selectedDay[0]) + Number(selectedDay[1]))}</span>
        </div>
        <div>
            <span>${selectedYear}</span>
            <span>-></span>
            <span>${selectedYear[0]} + ${selectedYear[1]} + ${selectedYear[2]} + ${selectedYear[3]}</span>
            <span>-></span>
            <span>${(Number(selectedYear[0]) + Number(selectedYear[1]) + Number(selectedYear[2]) + Number(selectedYear[3]))}</span>
        </div>
    </div>
    <span>=</span>
    <span>${destiny}</span>
    `
}