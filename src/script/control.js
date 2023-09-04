let presentationExpression = false
let presentationMotivation = false
let $_destiny = false
let $_expression = false
let $_motivation = false
let ended = false
let load = false

function starAnalyzing() {
    console.log("teste")
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
        playDestiny()
        return
    }
    if(!$_expression){
        _fullName = document.querySelector("#mce-LNAME").value
        if(_fullName == ""){
            alert("escriba su nombre")
            return
        }
        let genderSelect = $("#mce-MMERGE7")
        switch (genderSelect.options[genderSelect.selectedIndex].value) {
            case "Masculino":
                _gender = "h"
                
                break;
        
            default:
                _gender = "m"
                break;
        }
        playExpression()
        return
    }
    if(!$_motivation){
        let statusSelect = $("#mce-MMERGE8")
        switch (statusSelect.options[statusSelect.selectedIndex].value) {
            case "Casado":
                _status = "c"
                break;
            case "Comprometido":
                _status = "r"
                break;
            default:
                _status = "s"
                break;
        }
        playMotivation()
        return
    }

} 