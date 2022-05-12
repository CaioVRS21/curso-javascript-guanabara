var resultado = window.document.getElementById('resultado')
var res = 0

function btnLimpar(){
    res = 0
    resultado.innerHTML = res
}

function btnSomar(){
    res += 1
    resultado.innerHTML = res
}

function btnSubtrair(){
    res -= 1
    resultado.innerHTML = res
}