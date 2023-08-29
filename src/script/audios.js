function playInitDestiny(){
    $("#container1").style.display = "none"
    $("#container2").style.display = "flex"
    $("#container5").style.display = "flex"
    $("#subtitle").style.display = "flex"
    $("#analizingName").innerHTML = _name
    $("#analizingDate").innerHTML = `${dateBorn.d} / ${dateBorn.m} / ${dateBorn.y}`
    audio.src = `./src/audios/destiny/init.mp3`
    audio.play()
    audio.addEventListener("ended", presInitDes)
    audio.addEventListener("timeupdate", initDestinyAnimation)
    audioFundo.volume = 0.15
    audioFundo.play()
    setAnalizingCalc()
    subtitle(subDestiny.init)
    function presInitDes(){
        audio.removeEventListener("ended", presInitDes)
        audio.removeEventListener("timeupdate", initDestinyAnimation)
        playDestiny()
    }   
}
function playDestiny(){
    let numberDestiny = Number(sumDate.d) + Number(sumDate.m) + Number(sumDate.y)
    if(numberDestiny > 9 && numberDestiny != 11 && numberDestiny != 22){
        numberDestiny = Number(numberDestiny.toString()[0]) + Number(numberDestiny.toString()[1])
    }
    audio.src = `./src/audios/destiny/${numberDestiny}.mp3`
    audio.play()
    audio.addEventListener("ended", presDes)
    audio.addEventListener("timeupdate", destinyAnimation)
    subtitle(subDestiny[numberDestiny])
    function presDes(){
        audio.removeEventListener("ended", presDes)
        audio.removeEventListener("timeupdate", destinyAnimation)
        playEndDestiny()
    }   
}
function playEndDestiny(){
    audio.src = `./src/audios/destiny/end.mp3`
    audio.play()
    audio.addEventListener("ended", presEndDes)
    audio.addEventListener("timeupdate", endDestinyAnimation)
    subtitle(subDestiny.end)
    function presEndDes(){
        $_destiny = true
        $("#container2").style.display = "none"
        $("#container3").style.display = "flex"
        $("#subtitle").style.display = "none"
        audio.removeEventListener("ended", presEndDes)
        audio.removeEventListener("timeupdate", endDestinyAnimation)
    }   
}



function playInitExpression(){
    $("#container3").style.display = "none"
    $("#container2").style.display = "flex"
    $("#subtitle").style.display = "flex"
    insertImage(0, 1, _fullName)
    audio.src = `./src/audios/expression/init.mp3`
    audio.play()
    $("#container3").innerHTML = `
        <div>
            <p>Para obtener tu lectura personalizada gratuita de motivación, completa la información a continuación...</p>
        </div>
        <div>
            <div>
                <h3 class="titleInput">
                    <span>
                        Su e-mail 
                    </span>
                    <hr>
                    <span class="num">2</span>
                </h3>
                <input type="email" id="inputEmail" placeholder="e-mail">
            </div>
            <div>
                <h3 class="titleInput">
                    <span>
                        estado civil
                    </span>
                    <hr>
                    <span class="num">1</span>
                </h3>
                <select id="statusSelect">
                    <option value="c">Casado</option>
                    <option value="s">En una Relacion</option>
                    <option value="r">Comprometido</option>
                    <option value="s">Soltero</option>
                    <option value="s">Separado</option>
                    <option value="s">Viuvo</option>
                </select>
            </div>
            <div>
                <h3 class="titleInput">
                    <span></span>
                    <span class="num">3</span>
                </h3>
                <button onclick="starAnalyzing()">continuar con lectura</button>
            </div>
        </div>
        `
    subtitle(subExpression.init)
    audio.addEventListener("ended", initExpres)
    audio.addEventListener("timeupdate", initExpressionAnimation)
    function initExpres(){
        playExpression()
        audio.removeEventListener("ended", initExpres)
        audio.removeEventListener("timeupdate", initExpressionAnimation)
    }
}
function playExpression(){
    let numberExpression = calcExpression()
    audio.src = `./src/audios/expression/${numberExpression}.mp3`
    audio.play()
    subtitle(subExpression[numberExpression])
    audio.addEventListener("ended", expres)
    audio.addEventListener("timeupdate", expressionAnimation)
    function expres(){
        playEndExpression()
        audio.removeEventListener("ended", expres)
        audio.removeEventListener("timeupdate", expressionAnimation)
    }
}
function playEndExpression(){
    audio.src = `./src/audios/expression/end.mp3`
    audio.play()
    subtitle(subExpression.end)
    audio.addEventListener("ended", endExpres)
    audio.addEventListener("timeupdate", endExpressionAnimation)    
    $_expression = true
    function endExpres(){
        $("#subtitle").style.display = "none"
        audio.removeEventListener("ended", endExpres)
        audio.removeEventListener("timeupdate", endExpressionAnimation)
    }
}



function playInitMotivation(){
    $("#container2").style.display = "flex"
    $("#container3").style.display = "none"
    $("#subtitle").style.display = "flex"
    insertImage(0, 2, _fullName)
    audio.src = `./src/audios/motivation/${_gender}-init.mp3`
    audio.play()
    subtitle(subMotivation[`${_gender}_init`])
    audio.addEventListener("ended", presInitMot)
    function presInitMot(){
        audio.removeEventListener("ended", presInitMot)
        playMotivation()
    }
}
function playMotivation(){
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
    let dataRef =  2023 - Number(dateBorn.y)
    let yaerRed = 19
    if(dataRef >= 60){ yaerRed = 60 }
    if(dataRef >= 50){ yaerRed = 50 }
    if(dataRef >= 40){ yaerRed = 40 }
    if(dataRef >= 30){ yaerRed = 30 }
    if(dataRef >= 20){ yaerRed = 20 }
    audio.src = `./src/audios/motivation/${_gender}-${yaerRed}-${_status}.mp3`
    audio.play()
    subtitle(subMotivation[`${_gender}_${_status}${yaerRed}`])
    audio.addEventListener("ended", mot)
    function mot(){
        audio.removeEventListener("ended", mot)
        playEndMotication()
    }

}
function playEndMotication(){
    audio.src = `./src/audios/motivation/${_gender}-end.mp3`
    audio.play()
    subtitle(subMotivation[`${_gender}_end`])
    audio.addEventListener("ended", endMot)
    function endMot(){
        audio.removeEventListener("ended", endMot)
        $("#subtitle").style.display = "none"
    }
}


function playEnd(){
    $("#container1").style.display = "none"
    $("#container2").style.display = "flex"
    audio.src = `./src/audios/end1.mp3`
    $("#container2").innerHTML = `
        <img src="./src/images/capa-mapa.jpeg" alt="" class="imgFocus">
    `
    audio.play()
    //subtitle(subEnd[1])
    audio.addEventListener("ended", audio2)
    function audio2(){
        audio.removeEventListener("ended", audio2)
        audio.src = `./src/audios/end2.mp3`
        audio.play()
        //subtitle(subEnd[2])
        audio.addEventListener("ended", audio3)
    }
    function audio3(){
        audio.removeEventListener("ended", audio3)
        ended = true
        $("#container2").style.display = "none"
        $("#container4").style.display = "flex"
        audio.src = `./src/audios/end3.mp3`
        audio.play()
        //subtitle(subEnd[3])
        //audio.addEventListener("ended", endead)
    }
    function endead(){
        document.querySelector("#subtitle").style.display = "none"
    }
}
