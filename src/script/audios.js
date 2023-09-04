function playDestiny(){
    $("#container1").style.display = "none"
    $("#container2").style.display = "flex"
    $("#container5").style.display = "flex"
    $("#subtitle").style.display = "flex"
    $("#analizingName").innerHTML = _name
    $("#analizingDate").innerHTML = `${dateBorn.d} / ${dateBorn.m} / ${dateBorn.y}`
    console.log("destino")
    let numberDestiny = Number(sumDate.d) + Number(sumDate.m) + Number(sumDate.y)
    if(numberDestiny > 9 && numberDestiny != 11 && numberDestiny != 22){
        numberDestiny = Number(numberDestiny.toString()[0]) + Number(numberDestiny.toString()[1])
    }
    audio.src = `./src/audios/destiny/${numberDestiny}.mp3`
    audio.play()
    audio.addEventListener("ended", presInitDes)
    audio.addEventListener("timeupdate", destinyAnimation)
    audioFundo.volume = 0.15
    audioFundo.play()
    audio.playbackRate = 1.1
    setAnalizingCalc()
    subtitle(subDestiny.init, 0)
    function presInitDes(){
        $_destiny = true
        $("#subtitle").style.display = "none"
        $("#container2").style.display = "none"
        $("#container3").style.display = "flex"
        audio.removeEventListener("ended", presInitDes)
        audio.removeEventListener("timeupdate", destinyAnimation)
    }   
}
function playExpression(){
    $("#container3").style.display = "none"
    $("#container2").style.display = "flex"
    $("#subtitle").style.display = "flex"
    insertImage(0, 1, _fullName)
    let numberExpression = calcExpression()
    audio.src = `./src/audios/expression/${numberExpression}.mp3`
    audio.play()
    console.log("expressão")
    $("#inputGenrer").style.display = "none"
    $("#inputFullName").style.display = "none"
    $("#btnContinueForm").style.display = "none"
    $("#inputStatus").style.display = "block"
    $("#inputEmail").style.display = "block"
    $("#mce-FNAME").value = _name
    $("#mce-MMERGE6-day").value = dateBorn.d
    $("#mce-MMERGE6-month").value = dateBorn.m
    $("#mce-MMERGE6-year").value = dateBorn.y
    $("#mc-embedded-subscribe").style.display = "block"
    $("#mc-embedded-subscribe-form").addEventListener("submit", starAnalyzing)
    subtitle(subExpression.init, 0)
    audio.addEventListener("timeupdate", expressionAnimation)
    $_expression = true
}
function playMotivation(){
    $("#container2").style.display = "flex"
    $("#container3").style.display = "none"
    $("#subtitle").style.display = "flex"
    insertImage(0, 2, _fullName)
    console.log("motivation")
    let dataRef =  2023 - Number(dateBorn.y)
    let yaerRed = 19
    if(dataRef >= 60){ yaerRed = 60 }
    if(dataRef >= 50){ yaerRed = 50 }
    if(dataRef >= 40){ yaerRed = 40 }
    if(dataRef >= 30){ yaerRed = 30 }
    if(dataRef >= 20){ yaerRed = 20 }
    audio.src = `./src/audios/motivation/${_gender}-${yaerRed}-${_status}.mp3`
    audio.play()
    subtitle(subMotivation[`${_gender}_init`], 0)
    audio.addEventListener("ended", presInitMot)
    audio.addEventListener("timeupdate", motivationAnimation)
    function presInitMot(){
        audio.removeEventListener("ended", presInitMot)
        audio.removeEventListener("timeupdate", motivationAnimation)
        $("#subtitle").style.display = "none"
        $("#analizingDiv").innerHTML = `<div id="divContinueToEnd"><p>?Deseas profundizar en tu lectura?</p><input type="button" value="Sí, quiero" onclick="playEnd()"/></div>`
    }
}


function playEnd(){
    $("#container1").style.display = "none"
    $("#container2").style.display = "flex"
    $("#subtitle").style.display = "flex"
    audio.src = `./src/audios/end/1.mp3`
    $("#analizingDiv").innerHTML = `
        <div id="DivNumber">
            <div>
                <img src="./src/images/mandala-object-22.png" class="" style="width: 365px;">
                <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                <img src="./src/images/mandala-shape-22.png" class="spinY1" style="height: 365px;">
                <img src="./src/images/mandala-lines-22.png" class="spinY2" style="height: 370px;">
            </div>
        </div>
    `    
    audio.play()
    subtitle(subEnd[1], 0)
    audio.addEventListener("ended", audio2)
    function audio2(){
        audio.removeEventListener("ended", audio2)
        audio.src = `./src/audios/end/2.mp3`
        audio.play()
        $("#container2").innerHTML = "<div id='analizingDiv'></div>"
        $("#analizingDiv").innerHTML = `
        <div id="DivCapa">
            <img src="./src/images/capa-mapa.png"/>
        </div>
        `
        subtitle(subEnd[2], 0)
        audio.addEventListener("ended", audio3)
    }
    function audio3(){
        $("#container2").style.display = "none"
        $("#container4").style.display = "flex"
        audio.removeEventListener("ended", audio3)
        audio.src = `./src/audios/end/3.mp3`
        subtitle(subEnd[3], 0)
        audio.play()
        audio.addEventListener("ended", audio4)
    }
    function audio4(){
        audio.removeEventListener("ended", audio3)
        audio.src = `./src/audios/end/4.mp3`
        audio.play()
        subtitle(subEnd[4], 0)
        audio.addEventListener("ended", endead)
    }
    function endead(){
        document.querySelector("#subtitle").style.display = "none"
    }
}
