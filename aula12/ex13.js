let x = 6
let y = 2
let operador = '/'

switch (operador){
    case '+': 
    z = x + y
    console.log(`A resposta é ${z}`)
    break;

    case '-': 
    z = x - y
    console.log(`A resposta é ${z}`)
    break;

    case '*': 
    z = x * y
    console.log(`A resposta é ${z}`)
    break;

    case '/': 
    z = x / y
    console.log(`A resposta é ${z}`)
    break;

    default: 
    console.log('Por favor repita a operação')
    break;
}