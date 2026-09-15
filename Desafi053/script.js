let posi = 0
let negativo = 0
let zero = 0
for(i=0;i<11;i++){
    num = parseInt(prompt("Digite um numero"))
    if (num > 0){
        posi +=1
    }else if (num < 0){
        negativo +=1
    }else if (num == 0){
        zero +=1
    }
}

console.log(`Quantidade de numeros positvo ${posi},quantidade de numero negativos ${negativo}, quantidade de zeros ${zero}`)