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
        <div id="mc_embed_signup">
            <form action="https://gmail.us14.list-manage.com/subscribe/post?u=3835aa7142bba1b6da850498a&amp;id=2a4327cc64&amp;f_id=000aafe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate">
                <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                        <h3 class="titleInput">
                            <span>
                                Su e-mail 
                            </span>
                            <hr>
                            <span class="num">2</span>
                        </h3>
                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
                    </div>
                        
                    <div class="mc-field-group" style="display: none;">
                        <input type="text" name="FNAME" class=" text" id="mce-FNAME" value="${_name}">
                    </div>
                    
                    <div class="mc-field-group" style="display: none;">
                        <input type="text" name="LNAME" class=" text" id="mce-LNAME" value="${_fullName}">
                    </div>
                    
                    <div class="mc-field-group size1of2" style="display: none;">
                        <div class="datefield">
                            <span class="subfield dayfield">
                                <input class="datepart " type="text" pattern="[0-9]*" placeholder="DD" size="2" maxlength="2" name="MMERGE6[day]" id="mce-MMERGE6-day" value="${dateBorn.d}">
                            </span> 
                                /
                            <span class="subfield monthfield">
                                <input class="datepart " type="text" pattern="[0-9]*" placeholder="MM" size="2" maxlength="2" name="MMERGE6[month]" id="mce-MMERGE6-month" value="${dateBorn.m}">
                            </span> 
                                /
                            <span class="subfield yearfield">
                                <input class="datepart " type="text" pattern="[0-9]*" placeholder="YYYY" size="4" maxlength="4" name="MMERGE6[year]" id="mce-MMERGE6-year" value="${dateBorn.y}">
                            </span>
                        </div>
                    </div>
                    
                    <div class="mc-field-group">
                        <h3 class="titleInput">
                            <span>
                                estado civil
                            </span>
                            <hr>
                            <span class="num">1</span>
                        </h3>
                        <select name="MMERGE8" class="" id="mce-MMERGE8">
                            <option value="Casado">Casado</option>
                            <option value="En una Relacion">En una Relacion</option>
                            <option value="Comprometido">Comprometido</option>
                            <option value="Soltero">Soltero</option>
                            <option value="Separado">Separado</option>
                            <option value="Viuvo">Viuvo</option>
                        </select>
                    </div>
                    
                    <div id="mce-responses" class="clear foot" style="display: none;">
                        <div class="response" id="mce-error-response" style="display: none;"></div>
                        <div class="response" id="mce-success-response" style="display: none;"></div>
                    </div>

                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                        <input type="text" name="b_3835aa7142bba1b6da850498a_2a4327cc64" tabindex="-1" value="">
                    </div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                            <p style="margin: 0px auto;"><a href="http://eepurl.com/iyK2YY" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        `
    $("#mc-embedded-subscribe-form").addEventListener("submit", ()=>{
        starAnalyzing()
    })
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
