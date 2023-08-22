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
let load = false

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
        $("#containerLoad").style.display = "none"
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
        playMotivation()
        return
    }
    if(!ended){
        playEnded()
        return
    }

} 