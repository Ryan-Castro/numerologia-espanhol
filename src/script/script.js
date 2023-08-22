let audio = document.querySelector("#mainAudio")
let audioFundo = document.querySelector("#audioFundo")
let _name = ""
let _fullName = ""
let months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
let dateBorn = {d: "", m: "", y:""}
let sumDate = {d: "", m: "", y:""}
let sumDestiny = 0
alert("teste: 4")


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
        if(baseNum == 11 || baseNum == 22){
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