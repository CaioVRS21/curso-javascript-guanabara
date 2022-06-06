function parOuImpar(){
    let x = 18

    if (x % 2 == 0){
        console.log(`O número ${x} é par`)
        return;
    } 
    if (x % 2 != 0) {
        console.log(`O número ${x} é impar`)
        return;
    }
}

// parOuImpar()

function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--)
    fat *= c;
    return fat;
}

// console.log(fatorial(5))

function fatorial2(n){
    if (n == 1){
        return 1;
    }

    if (n != 1){
        return n * fatorial2(n-1)
    }
}

console.log(fatorial2(5))

//MODO RECURSIVO ACIMA