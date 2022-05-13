
let res = 0

function btnOk(){
    let passos = document.getElementById('passos').value
        // para capturar o valor do input "passos"
}

function btnLimpar(){
    res = 0
    document.getElementById('resultado').textContent = res
    // para limpar a tela
}

function btnSomar(){
    passos = Number.parseInt(document.getElementById('passos').value)
    passos = undefined ? res+= res : res += passos;
    
    document.getElementById('resultado').textContent = res
    }
    // para somar e trazer o valor de "passos"


function btnSubtrair(){
    passos = Number.parseInt(document.getElementById('passos').value)
    res -= passos
    document.getElementById('resultado').textContent = res
}



