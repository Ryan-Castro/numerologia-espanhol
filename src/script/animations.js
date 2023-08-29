let firstPhase = false
let timeBase = 0
let controlerDestiny = {
    0:false,
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false,
    8:false,
    9:false
}
let controlerExpression = {
    0:false,
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false,
    8:false,
    9:false
}



function initDestinyAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    if(timeAudio> 1 && timeAudio<15){
        showTable(timeAudio, 0)
    }
    if(timeAudio>25 && !controlerDestiny[0]){
        controlerDestiny[0] = true
        $("#analizingName").innerHTML = ""
        $("#analizingDate").innerHTML = ""
        insertImage(1, 5, "")
    }
    if(timeAudio>30 && !controlerDestiny[1]){
        controlerDestiny[1] = true
        insertImage(1, 6, "")
    }
    if(timeAudio>50 && !controlerDestiny[2]){
        controlerDestiny[2] = true
        insertImage(0, 0, "Número del destino")
    }
    if(timeAudio>52 && !controlerDestiny[3]){
        controlerDestiny[3] = true
        insertImage(0, 1, "Número del aprendizaje")
    }
    if(timeAudio>53 && !controlerDestiny[4]){
        controlerDestiny[4] = true
        insertImage(0, 2, "Número del alma")
    }
    if(timeAudio>55 && !controlerDestiny[5]){
        controlerDestiny[5] = true
        insertImage(0, 3, "Número de la expresión")
    }
    if(timeAudio>57 && !controlerDestiny[6]){
        controlerDestiny[6] = true
        insertImage(0, 4, "número de la personalidad")
    }
    if(timeAudio>60 && !firstPhase){
        setAnalizingCalc()
        firstPhase = true
    }
    if(timeAudio> 60 && timeAudio<75){
        showTable(timeAudio, 60)
    }
}
function destinyAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    let numberDestinyBase = Number(sumDate.d) + Number(sumDate.m) + Number(sumDate.y)
    if(numberDestinyBase > 9 && numberDestinyBase != 11 && numberDestinyBase != 22){
        numberDestinyBase = Number(numberDestinyBase.toString()[0]) + Number(numberDestinyBase.toString()[1])
    }
    if(timeAudio>1 && !controlerDestiny[7]){
        controlerDestiny[7] = true
        insertImage(0, 0, `Tu número del destino es el: ${numberDestinyBase}`)
    }
    if(timeAudio>20 && !controlerDestiny[8]){
        controlerDestiny[8] = true
        insertNumber(numberDestinyBase)
    }
}
function endDestinyAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    if(timeAudio>20 && !controlerDestiny[9]){
        analizeExpression(_name, false)
        controlerDestiny[9] = true
    }
}


function initExpressionAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    if(timeAudio>20 && !controlerExpression[0]){
        analizeExpression(_fullName, true)
        controlerExpression[0] = true
    }
}
function expressionAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    let numberExpression = calcExpression()
    if(timeAudio>5 && !controlerExpression[1]){
        insertNumber(numberExpression)
        controlerExpression[1] = true
    }

}
function endExpressionAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    if(timeAudio>50 && !controlerExpression[2]){
        $("#container2").style.display = "none"
        $("#container3").style.display = "flex"
        controlerExpression[2] = true
    }
}


function initMotivationAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    if(timeAudio>20 && !controlerImg[8]){
        analizeMotivation(_fullName, true)
        controlerImg[8] = true
    }
}
function motivationAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    let numberMotivation = calcMotivation()
    if(timeAudio>4){
        if(!controlerImg[9]){
            controlerImg[9] = true
            insertNumber(numberMotivation)
        }
    }
}
function endMotivationAnimation(){
    let timeAudio = audio.currentTime.toFixed(2)
    let numberMotivation = calcMotivation()
    if(timeAudio>4){
        if(!controlerImg[9]){
            controlerImg[9] = true
            insertNumber(numberMotivation)
        }
    }
}




function insertImage(bg, image, text){
    let bgImg = ["border-bg.png", "mandala-bg.png"]
    let images = ["sign-expression-bg.png","numero-expressao.png","sign-lifepath-bg.webp","sign-personality-bg.png","sign-soulurge-bg.png", "melhorcaminho.png", "oportunidades.png"]
    $("#container2").innerHTML = "<div id='analizingDiv'></div>"
    $("#analizingDiv").innerHTML = `
    <div id="DivImage">
        <h2>${text}</h2>
        <img src="./src/images/${bgImg[bg]}"/ class="imgBg">
        <img src="./src/images/${images[image]}"/ class="imgMain">
    </div>
    `
    setTimeout(()=>{$("#DivImage").style.transform = "scale(1)"},200)
    
}
function insertNumber(number){
    console.log(number)
    $("#container2").innerHTML = "<div id='analizingDiv'></div>"
    switch (number) {
        case 1: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-1.png" class="" style="width: 365px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                    </div>
                    <span>1</span>
                </div>
            `    
        break;
        case 2: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-2.png" class="" style="width: 365px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-2.png" class="spinY1" style="height: 365px;">
                    </div>
                    <span>2</span>
                </div>
            `    
        break;
        case 3: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-3.png" class="" style="width: 365px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-3.png" class="spinY1" style="height: 265px; width: 305px; margin-bottom: 85px">
                        <img src="./src/images/mandala-lines-3.png" class="spinY2" style="height: 310px; margin-bottom: 90px">
                    </div>
                    <span>3</span>
                </div>
            `    
        break;
        case 4: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-4.png" class="" style="width: 365px;">
                        <img src="./src/images/mandala-bg.png" style="width: 400px;">
                        <img src="./src/images/mandala-lines-4.png" class="spinY1" style="height: 365px;">
                    </div>
                    <span>4</span>
                </div>
            `    
        break;
        case 5: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-5.png" class="" style="width: 330px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-5.png" class="spinY1" style="height: 335px;margin-bottom: 40px">
                        <img src="./src/images/mandala-lines-5.png" class="spinY2" style="height: 345px; margin-bottom: 40px">
                    </div>
                    <span>5</span>
                </div>
            `    
        break;
        case 6: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-6.png" class="" style="width: 370px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-lines-6.png" class="spinY1" style="height: 375px;">
                    </div>
                    <span>6</span>
                </div>
            `    
        break;
        case 7: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-7.png" class="" style="width: 365px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-7.png" class="spinY1" style="height: 350px;">
                        <img src="./src/images/mandala-lines-7.png" class="spinY2" style="height: 355px;">
                    </div>
                    <span>7</span>
                </div>
            `    
        break;
        case 8: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-8.png" class="" style="width: 370px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-8.png" class="spinY1" style="height: 375px;">
                        <img src="./src/images/mandala-lines-8.png" class="spinY2" style="height: 375px;">
                    </div>
                    <span>8</span>
                </div>
            `    
        break;
        case 9: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-9.png" class="" style="width: 345px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-9.png" class="spinY1" style="height: 365px; margin-bottom: 5px; margin-left: 10px;">
                        <img src="./src/images/mandala-lines-9.png" class="spinY2" style="height: 365px; margin-bottom: 5px; margin-left: 10px;">
                    </div>
                    <span>9</span>
                </div>
            `    
        break;
        case 11: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-11.png" class="" style="width: 375px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-11.png" class="spinY1" style="height: 360px;">
                        <img src="./src/images/mandala-lines-11.png" class="spinY2" style="height: 365px;">
                    </div>
                    <span>11</span>
                </div>
            `    
        break;
        case 22: 
            $("#analizingDiv").innerHTML = `
                <div id="DivNumber">
                    <div>
                        <img src="./src/images/mandala-object-22.png" class="" style="width: 365px;">
                        <img src="./src/images/mandala-bg.png" class="" style="width: 400px;">
                        <img src="./src/images/mandala-shape-22.png" class="spinY1" style="height: 365px;">
                        <img src="./src/images/mandala-lines-22.png" class="spinY2" style="height: 370px;">
                    </div>
                    <span>22</span>
                </div>
            `    
        break;
        default:
        break;
    }
}
function analizeExpression(text, comlet){
    setTable()
    let textArrey = text.split("")
    $("#separateName").innerHTML = ""

    textArrey.forEach((element, index) => {
        setTimeout(() => {
            for(i of $("#tableCabalist").children[0].children){
                if(i.id.indexOf(element) != -1 && i.id != "header"){
                    i.children[(tableCabalistic[element.toLocaleLowerCase()] - 1)].className = "active"
                }
                
            }
            if(comlet){
                if(element != " "){
                    $("#separateName").innerHTML +=`
                        <div><span>${element}</span><span>${(tableCabalistic[element.toLocaleLowerCase()])}</span></div>
                    `
                } else {
                    $("#separateName").innerHTML +=`
                        <div></div>
                    `
                }
            }
    }, index * 700);
    });
}
function analizeMotivation(text, comlet){
    setTable()
    let textArrey = text.split("")
    $("#separateName").innerHTML = ""

    textArrey.forEach((element, index) => {
        let letter = element.toLocaleLowerCase()
        setTimeout(() => {
            for(i of $("#tableCabalist").children[0].children){
                if(i.id.indexOf(letter) != -1 && i.id != "header"){
                    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
                        i.children[(tableCabalistic[letter] - 1)].className = "active"
                    }
                }
                
            }
            if(comlet){
                if(letter != " "){
                    let content = `<div><span>${element}</span>`
                    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
                        content += `<span>${(tableCabalistic[letter])}</span>`
                    }
                    content += `</div>`
                    $("#separateName").innerHTML += content
                } else {
                    $("#separateName").innerHTML +=`
                        <div></div>
                    `
                }
            }
    }, index * 700);
    });
}
function showTable(timeAudio, timeBase){
    let _Ref = $("#analizingCalc")
    function showSpan(column, row){
        _Ref.children[column].children[row].style.opacity = 1
        if(_Ref.children[column].children[row].className == "info"){
            _Ref.children[column].children[row].children[0].style.paddingTop = "0px"
        }
    }
    if(timeAudio>(1 + timeBase) && timeAudio<(2 + timeBase)){
        showSpan(0, 0)
    }
    if(timeAudio>(2 + timeBase) && timeAudio<(3 + timeBase)){
        showSpan(0, 1)
        showSpan(0, 2)
    }
    if(timeAudio>(3 + timeBase) && timeAudio<(4 + timeBase)){
        showSpan(0, 3)
        showSpan(0, 4)
        showSpan(1, 1)
    }
    if(timeAudio>(4 + timeBase) && timeAudio<(5 + timeBase)){
        showSpan(2, 0)
    }
    if(timeAudio>(5 + timeBase) && timeAudio<(6 + timeBase)){
        showSpan(2, 1)
        showSpan(2, 2)
    }
    if(timeAudio>(6 + timeBase) && timeAudio<(7 + timeBase)){
        showSpan(2, 3)
        showSpan(2, 4)
        showSpan(3, 1)
    }
    if(timeAudio>(7 + timeBase) && timeAudio<(8 + timeBase)){
        showSpan(4, 0)
    }
    if(timeAudio>(8 + timeBase) && timeAudio<(9 + timeBase)){
        showSpan(4, 1)
        showSpan(4, 2)
    }
    if(timeAudio>(9+ timeBase) && timeAudio<(10 + timeBase)){
        showSpan(4, 3)
        showSpan(4, 4)
    }
    if(timeAudio>(10 + timeBase) && timeAudio<(11 + timeBase)){
        showSpan(2, 5)
        showSpan(2, 6)
    }
    if(timeAudio>(11 + timeBase) && timeAudio<(12 + timeBase)){
        showSpan(2, 5)
        showSpan(2, 6)
    }
}