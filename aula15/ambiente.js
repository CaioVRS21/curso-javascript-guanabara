let num = [1, 13, 21, 14]

for (let i in num){
    console.log(`A posição ${i} tem como elemento ${num[i]}`)
}

num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`Arrumado o vetor fica assim ${num}`)
console.log(`O número 14 está na posição ${num.indexOf(14)}`)