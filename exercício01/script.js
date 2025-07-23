function soma(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = n1+n2
}


function sub(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSub")

    resposta.textContent = n1-n2
}

function multi(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respMulti")

    resposta.textContent = n1*n2
}

function div(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respDiv")

    resposta.textContent = n1/n2
}