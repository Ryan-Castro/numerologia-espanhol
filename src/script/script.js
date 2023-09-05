let audio = document.querySelector("#mainAudio")
let audioFundo = document.querySelector("#audioFundo")
let _name = ""
let _fullName = ""
let _gender = ""
let _status = ""
let dateBorn = {d: "", m: "", y:""}
let sumDate = {d: "", m: "", y:""}
let calcNumber = {
    destiny: 0,
    expression: 0,
    soul: 0,
    personality: 0,
    learning: 0,
    maturation: {day: "", month: 0},
}

function $(element){
    return document.querySelector(element)
}


function calcExpression(){
    let nameFull = _fullName.toLocaleLowerCase().replaceAll(" ", "")
    let sumNumber = 0
    nameFull.split("").forEach(letter=>{
        sumNumber += tableCabalistic[letter]
    })
    return synthesizeNumber(sumNumber)
}
function calcSoul(){
    let nameFull = _fullName.toLocaleLowerCase().replaceAll(" ", "")
    let sumNumber = 0
    nameFull.split("").forEach(letter=>{
        switch (letter) {
            case "a": sumNumber += tableCabalistic[letter]; break;
            case "e": sumNumber += tableCabalistic[letter]; break;
            case "i": sumNumber += tableCabalistic[letter]; break;
            case "o": sumNumber += tableCabalistic[letter]; break;
            case "u": sumNumber += tableCabalistic[letter]; break;
            default: sumNumber += 0; break;
        }  
    })
    return synthesizeNumber(sumNumber)
}
function calcPersonality(){
    let nameFull = _fullName
                        .toLocaleLowerCase()
                        .replaceAll(" ", "")
                        .replaceAll("a", "")
                        .replaceAll("e", "")
                        .replaceAll("i", "")
                        .replaceAll("o", "")
                        .replaceAll("u", "")
    let sumNumber = 0
    nameFull.split("").forEach(letter=>{
        sumNumber += tableCabalistic[letter]
    })
    return synthesizeNumber(sumNumber)
}
function calcLearning(){
    let baseNum = dateBorn.d
    while (baseNum>9) {
        let baseSum = 0
        baseNum.toString().split("").forEach(num=>{
            baseSum += Number(num)
        })
        baseNum = baseSum
    }
    calcNumber.learning = baseNum
}
function calcMaturation(){
    let daysLuck = [
        [1, 10, 19, 28],
        [2, 11, 20, 29],
        [3, 12, 21, 30],
        [4, 13, 22, 31],
        [5, 14, 23],
        [6, 15, 24],
        [7, 16, 25],
        [8, 17, 26],
        [9, 18, 27],
    ]
    daysLuck.forEach(element => {
        if(element.indexOf(Number(dateBorn.d)) != -1){
            calcNumber.maturation.day = JSON.stringify(element).replace("[", "").replace("]", "").replaceAll(",", ", ")
        }
    });
    if(Number(dateBorn.m) > 9){
        calcNumber.maturation.month = Number(dateBorn.m.toString()[0]) + Number(dateBorn.m.toString()[1])
        return
    }
    calcNumber.maturation.month = Number(dateBorn.m)
    
}


function synthesizeNumber(number){
    let baseNum = Number(number)
    while (baseNum>9) {
        if(baseNum == 11){
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
        $("#playAndStop").children[0].innerHTML = "<span class='material-symbols-outlined'>pause</span>"
    } else {
        audio.pause()
        $("#playAndStop").children[0].innerHTML = "<span class='material-symbols-outlined'>play_arrow</span>"
    }
}
function muteAndDesmute(){
    if(audio.volume > 0){
        audio.volume = 0
        $("#muteAndDesmute").children[0].innerHTML = "<span class='material-symbols-outlined'>volume_mute</span>"
    } else {
        audio.volume = 1
        $("#muteAndDesmute").children[0].innerHTML = "<span class='material-symbols-outlined'>volume_up</span>"
    }
}

function setAnalizingCalc(){
    for(i of $("#tableBorn").children){
        for(index of i.children){
            index.style.opacity = 0
            if(index.className == "info"){
                index.children[0].style.paddingTop = "20px"
            }
        }
    }
    $("#analizingDiv").innerHTML = `<table><tbody id="analizingCalc">${$("#tableBorn").innerHTML}</tbody></table>`
}