
let res = 0


function btnLimpar(){
    res = 0
    passos = ''
    document.getElementById('resultado').textContent = res
    document.getElementById('passos').value = passos
    // para limpar a tela
}

function btnSomar(){
    passos = Number.parseInt(document.getElementById('passos').value)
    // passos == 0 ? res+= res : res += passos;
    if (document.getElementById('passos').value.lenght == 0){

        passos == undefined ? res++ : res += passos
        document.getElementById('resultado').textContent = res

    } else if (document.getElementById('passos').value < 1){

    window.alert('Valores menores ou iguais a "0" são inválidos')
    } else {
        passos == 0 ? res++ : res += passos
        document.getElementById('resultado').textContent = res
    }
    
    // document.getElementById('resultado').textContent = res
    }
    // para somar e trazer o valor de "passos"


function btnSubtrair(){
    passos = Number.parseInt(document.getElementById('passos').value)
    res -= passos
    document.getElementById('resultado').textContent = res
}



