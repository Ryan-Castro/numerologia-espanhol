function setMonth(monthNumber, month){
    dateBorn.m = monthNumber
    let monthSumText = monthNumber.length > 1? `${monthNumber[0]} + ${monthNumber[1]}` : monthNumber
    let monthSumNumber = monthNumber.length > 1? (Number(monthNumber[0]) + Number(monthNumber[1])): monthNumber
    sumDate.m = Number(monthSumNumber)
    $("#textHidden").style.display = "none"
    $("#contantAnimation").style.display = "block"
    $("#tableBorn").children[0].innerHTML = `
        <td class="info"><div><span>${month}</span></div></td>
        <td><span class="material-symbols-outlined">arrow_forward</span></td>
        <td class="info"><div><span>${monthSumText}</span></div></td>
        <td><span class="material-symbols-outlined">arrow_forward</span></td>
        <td class="info"><div><span>${monthSumNumber}</span></div></td>
    `
    $("#tableBorn").children[1].innerHTML = `
        <td colspan="4"><span></span></td>
        <td>+</td>
    `
    let lengthArrey = $("#tableBorn").children[0].children.length
    for(let i = 0; i < lengthArrey; i++){
        setTimeout(() => {
            let _element = $("#tableBorn").children[0].children[i]
            _element.style.opacity = 1
            if(_element.className == "info"){
                _element.children[0].style.paddingTop = "0px"
            }
        }, i * 500); 
    }
    setTimeout(() => {
        $("#tableBorn").children[1].children[1].style.opacity = 1
    }, 2500);
    setLayoutDays()
}
function setLayoutDays(){
    let _days = ""
    for(let day=1;day<=31;day++){
        _days += `<input type="button" value="${day}" onclick="setDay('${day}')">`
    }
    $("section#inputs").innerHTML = `
        <h3>Indica tu día de nacimiento</h3>
        <div id="inputsDays">${_days}</div>
    `
}
function setDay(day){
    dateBorn.d = day
    let daySumText = day.length > 1? `${day[0]} + ${day[1]}` : day
    let daySumNumber = day.length > 1? (Number(day[0]) + Number(day[1])): day
    sumDate.d = Number(daySumNumber)
    if(daySumNumber>9){
        daySumNumber = `${daySumNumber.toString()[0]} + ${daySumNumber.toString()[1]}`
        sumDate.d = (Number(daySumNumber[0]) + Number(daySumNumber[4]))
        setTimeout(() => {
            $("#tableBorn").children[2].children[4].innerHTML = `<div><span>${(Number(daySumNumber[0]) + Number(daySumNumber[4]))}</span></div>`
            $("#tableBorn").children[2].children[4].children[0].style.paddingTop = "0px"
        }, 3000)
    }
    $("#tableBorn").children[2].innerHTML = `
        <td class="info"><div><span>${day}</span></div></td>
        <td><span class="material-symbols-outlined">arrow_forward</span></td>
        <td class="info"><div><span>${daySumText}</span></div></td>
        <td><span class="material-symbols-outlined">arrow_forward</span></td>
        <td class="info"><div><span>${daySumNumber}</span></div></td>
    `
    $("#tableBorn").children[3].innerHTML = `
        <td colspan="4"><span></span></td>
        <td>+</td>
    `
    let lengthArrey = $("#tableBorn").children[2].children.length
    for(let i = 0; i < lengthArrey; i++){
        setTimeout(() => {
            let _element = $("#tableBorn").children[2].children[i]
            _element.style.opacity = 1
            if(_element.className == "info"){
                _element.children[0].style.paddingTop = "0px"
            }
        }, i * 500); 
    }
    setTimeout(() => {
        $("#tableBorn").children[3].children[1].style.opacity = 1
    }, 2500);
    setLayoutDecade()
}
function setLayoutDecade(){
    let _decade = ""
    for(let decade=1910;decade<=2020;decade+=10){
        _decade += `<input type="button" value="${decade}" onclick="setLayoutYear('${decade}')">`
    }
    $("section#inputs").innerHTML = `
    <h3>Indica tu década de nacimiento</h3>
    <div id="inputsYears">${_decade}</div>
`
}
function setLayoutYear(year){
    let _years = ""
    for(let i = 0;i < 10;i++){
        _years += `<input type="button" value="${(Number(year) + Number(i))}" onclick="setYear('${(Number(year) + Number(i))}')">`
    }
    $("section#inputs").innerHTML = `
    <h3>Indica tu década de nacimiento</h3>
    <div id="inputsYears">${_years}</div>`
}
function setYear(year){
    dateBorn.y = year
    let yearSumText = `${year[0]}+${year[1]}+${year[2]}+${year[3]}`
    let yearSumNumber = (Number(year[0]) + Number(year[1]) + Number(year[2]) + Number(year[3]))
    sumDate.y = yearSumNumber
    if(yearSumNumber>9){
        yearSumNumber = `${yearSumNumber.toString()[0]} + ${yearSumNumber.toString()[1]}`
        sumDate.y = (Number(yearSumNumber[0]) + Number(yearSumNumber[4]))
        setTimeout(() => {
            $("#tableBorn").children[4].children[4].innerHTML = `<div><span>${(Number(yearSumNumber[0]) + Number(yearSumNumber[4]))}</span></div>`
            $("#tableBorn").children[4].children[4].children[0].style.paddingTop = "0px"
        }, 3000)
    }
    $("#tableBorn").children[4].innerHTML = `
        <td class="info"><div><span>${year}</span></div></td>
        <td><span class="material-symbols-outlined">arrow_forward</span></td>
        <td class="info"><div><span>${yearSumText}</span></div></td>
        <td><span class="material-symbols-outlined">arrow_forward</span></td>
        <td class="info"><div><span>${yearSumNumber}</span></div></td>
    `
    let lengthArrey = $("#tableBorn").children[4].children.length
    for(let i = 0; i < lengthArrey; i++){
        setTimeout(() => {
            let _element = $("#tableBorn").children[4].children[i]
            _element.style.opacity = 1
            if(_element.className == "info"){
                _element.children[0].style.paddingTop = "0px"
            }
        }, i * 500); 
    }
    sumDestiny = Number(sumDate.d) + Number(sumDate.m) + Number(sumDate.y)
    if(sumDestiny>9 && sumDestiny != 11 && sumDestiny != 22){
        sumDestiny = `${sumDestiny.toString()[0]} + ${sumDestiny.toString()[1]}`
        setTimeout(() => {
            $("#tableBorn").children[2].children[6].innerHTML = `<div><span>${(Number(sumDestiny[0]) + Number(sumDestiny[4]))}</span></div>`
            $("#tableBorn").children[2].children[6].children[0].style.paddingTop =  "0px"
            let load = true
        }, 5000)
    }
    setTimeout(() => {
        $("#tableBorn").children[2].innerHTML += `
            <td>=</td>
            <td class="info"><div><span>${sumDestiny}</span></div></td>
        `
        $("#tableBorn").children[2].children[5].style.opacity = 1
        $("#tableBorn").children[2].children[6].style.opacity = 1
        $("#tableBorn").children[2].children[6].children[0].style.paddingTop = "0px"     
    }, 4000)
    setLayoutName()
}
function setLayoutName(){
    $("section#inputs").innerHTML = `
    <h3>Indica tu primer nombre</h3>
    <div id="divStart">
        <h4>Tu primer nombre</h4>
        <input type="text"  placeholder="Nombre" id="inputName">
        <input type="button" onclick="starAnalyzing()" value="Comenzar"/>
    </div>
    `    
}
