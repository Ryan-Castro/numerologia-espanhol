function subtitle(array){
    let conterText = 0
    let Interval = setInterval(()=>{
        if(conterText >= array.length){
            document.querySelector("#subtitleP").innerHTML = array[conterText]
            conterText++
            return
        } 
        clearInterval(Interval)
    }, 3000)
}