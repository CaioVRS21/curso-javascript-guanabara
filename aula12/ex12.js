let agora = new Date()
let hora = agora.getHours()

if (hora <=12 ){
    console.log(`São ${hora} horas da manhã`)
    console.log('Bom dia')
} else if (hora >=12.1){
    console.log(`São ${hora} horas da tarde`)
    console.log('Boa Tarde')
} else {
    console.log(`São ${hora} horas da noite`)
    console.log('Boa noite')
}