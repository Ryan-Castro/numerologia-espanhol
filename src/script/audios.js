function playPresentationDestiny(){
    $("#container1").style.display = "none"
    $("#container2").style.display = "flex"
    $("#subtitle").style.display = "flex"
    $("#analizingName").innerHTML = _name
    $("#analizingDate").innerHTML = `${dateBorn.d} / ${dateBorn.m} / ${dateBorn.y}`
    audio.src = "./src/audios/presentationOnDestiny.mp3"
    audio.play()
    audio.addEventListener("ended", presDes)
    //audio.addEventListener("timeupdate", PresentationDestinyAnimation)
    audioFundo.volume = 0.15
    audioFundo.play()
    setAnalizingCalc()
    //subtitle(subPresentationDestiny)
    function presDes(){
        presentationDestiny = true
        audio.removeEventListener("ended", presDes)
        //audio.removeEventListener("timeupdate", PresentationDestinyAnimation)
        starAnalyzing()
    }
    
}
function playDestiny(){
    let numberDestiny = Number(sumDate.d) + Number(sumDate.m) + Number(sumDate.y)
    if(numberDestiny > 9 && numberDestiny != 11 && numberDestiny != 22){
        numberDestiny = Number(numberDestiny.toString()[0]) + Number(numberDestiny.toString()[1])
    }
    insertImage(0, 0, `Tu número de destino es: ${numberDestiny}`)
    audio.src = `./src/audios/destiny/destino${numberDestiny}.mp3`
    audio.play()
    audio.addEventListener("ended", Dest)
    audio.addEventListener("timeupdate", destinyAnimation)
    //subtitle(subDestiny[numberDestiny])
    function Dest(){
        destiny = true
        audio.removeEventListener("timeupdate", destinyAnimation)
        audio.removeEventListener("ended", Dest)
        starAnalyzing()
    }
}
function playIntroductionExpression(){
    audio.src = `./src/audios/introductionExpression.mp3`
    audio.play()
    //subtitle(subIntroductionExpression)
    audio.addEventListener("ended", intExpre)
    audio.addEventListener("timeupdate", IntroductionExpressionAnimation)
    function intExpre(){
        introductionExpression = true
        $("#container2").style.display = "none"
        $("#container3").style.display = "flex"
        //$("#subtitle").style.display = "none"
        audio.removeEventListener("ended", intExpre)   
        audio.removeEventListener("timeupdate", IntroductionExpressionAnimation)
    }
}
function playPresentationExpression(){
    $("#container3").style.display = "none"
    $("#container2").style.display = "flex"
    //$("#subtitle").style.display = "flex"
    insertImage(0, 1, _fullName)
    audio.src = "./src/audios/presentationExpression.mp3"
    audio.play()
    //subtitle(subPresentatiExpression)
    audio.addEventListener("ended", presExprex)
    audio.addEventListener("timeupdate", presentationExpressionAnimation)
    function presExprex(){
        presentationExpression = true
        audio.removeEventListener("ended", presExprex)
        audio.removeEventListener("timeupdate", presentationExpressionAnimation)
        starAnalyzing()
    }

}
function playExpression(){
    let numberExpression = calcExpression()
    insertImage(0, 0, `Tu número de expression es: ${numberExpression}`)
    audio.src = `./src/audios/expression/expressao${numberExpression}.mp3`
    audio.play()
    //subtitle(subExpression[numberExpression])
    audio.addEventListener("ended", expres)
    audio.addEventListener("timeupdate", expressionAnimation)
    function expres(){
        expression = true
        audio.removeEventListener("ended", expres)
        audio.removeEventListener("timeupdate", expressionAnimation)
        starAnalyzing()
    }
}
function playintroductionMotivation(){
    audio.src = `./src/audios/introductionMotivation.mp3`
    audio.play()
    //subtitle(subIntroductionMotication)
    audio.addEventListener("ended", intMot)
    insertImage(0, 2, "número de motivación")
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
                        tu género 
                    </span>
                    <hr>
                    <span class="num">1</span>
                </h3>
                <select id="statusSelect">
                    <option value="casado">Casado(a)</option>
                    <option value="soltero">Soltero(a)</option>
                    <option value="comprometida">Comprometido(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viudo">Viudo(a)</option>
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
    function intMot(){
        introductionMotivation = true
        $("#container2").style.display = "none"
        $("#container3").style.display = "flex"
        //$("#subtitle").style.display = "none"
        audio.removeEventListener("ended", intMot)
    }
}
function playPresentetionMotivation(){
    $("#container2").style.display = "flex"
    $("#container3").style.display = "none"
    insertImage(0, 2, _fullName)
    audio.src = "./src/audios/presentationMotivation.mp3"
    audio.play()
    //subtitle(subPresentationMotivation)
    audio.addEventListener("ended", presMot)
    audio.addEventListener("timeupdate", presentationMotivationAnimation)
    function presMot(){
        presentationMotivation = true
        audio.removeEventListener("ended", presMot)
        audio.removeEventListener("timeupdate", presentationMotivationAnimation)
        starAnalyzing()
    }
}
function playMotivation(){
    let numberMotivation = calcMotivation()
    insertImage(0, 3, `Tu número de motivación es: ${numberMotivation}`)
    audio.src = `./src/audios/motivation/motivacao${numberMotivation}.mp3`
    audio.play()
    //subtitle(subMotivaion[numberMotivation])
    audio.addEventListener("ended", mot)
    audio.addEventListener("timeupdate", motivationAnimation)
    function mot(){
        motivarion = true
        audio.removeEventListener("ended", mot)
        audio.removeEventListener("timeupdate", motivationAnimation)
        starAnalyzing()
    }

}
function playEnded(){
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