let presentationExpression = false
let presentationMotivation = false
let $_destiny = false
let $_expression = false
let $_motivation = false
let ended = false
let load = false

function starAnalyzing() {
    if(!$_destiny){
        _name = document.querySelector("#inputName").value
        if(_name == ""){
            alert("escriba su nombre")
            return
        }
        if(!load){
            alert("Espere terminar o carregamento")
            return
        }
        playInitDestiny()
        return
    }
    if(!$_expression){
        _fullName = document.querySelector("#inputFullName").value
        if(_fullName == ""){
            alert("escriba su nombre")
            return
        }
        let genderSelect = $("#genderSelect")
        _gender = genderSelect.options[genderSelect.selectedIndex].value
        playInitExpression()
        return
    }
    if(!$_motivation){
        let statusSelect = $("#statusSelect")
        _status = statusSelect.options[statusSelect.selectedIndex].value
        playInitMotivation()
        return
    }

} 