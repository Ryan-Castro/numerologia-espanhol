let presentationExpression = false
let presentationMotivation = false
let destiny = false
let expression = false
let motivarion = false
let introductionMotivation = false
let ended = false
let load = false

function starAnalyzing() {
    if(!destiny){
        _name = document.querySelector("#inputName").value
        if(_name == ""){
            alert("escriba su nombre")
            return
        }
        if(!load){
            alert("Espere terminar o carregamento")
            return
        }
        playDestiny()
        return
    }
    if(!expression){
        _fullName = document.querySelector("#inputFullName").value
        if(_fullName == ""){
            alert("escriba su nombre")
            return
        }
        playExpression()
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