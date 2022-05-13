
var res = 0

function btnLimpar(){
    res = 0
    document.getElementById('resultado').textContent = res
}

function btnSomar(){
    // res = res + calc
    res++
    document.getElementById('resultado').textContent = res
}

function btnSubtrair(){
    res--
    document.getElementById('resultado').textContent = res
}

