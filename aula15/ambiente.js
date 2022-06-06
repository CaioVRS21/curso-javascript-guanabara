let num = [1, 13, 21, 14]

for (let i in num){
    console.log(`A posição ${i} tem como elemento ${num[i]}`)
}

num.sort() //deixa os elementos do vetor em ordem crescente
console.log(`O vetor tem ${num.length} posições`) //.lenght dá o tamanho do vetor
console.log(`Arrumado o vetor fica assim ${num}`)
console.log(`O número 14 está na posição ${num.indexOf(14)}`) //indexOf(x) dá a posição do elemento dentro do vetor