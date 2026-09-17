var saldo = 0
var ow = true
do{
    let sele = parseInt(prompt("1 - Consultar saldo \
        2 - Depositar \
        3 - Sacar \
        0 - Sair "))
    
    switch (sele){
        case 1:
            console.log("Seu saldo é de ",saldo)
        break;

        case 2:
            let Deposita = parseInt(prompt("Quantos Reais deseja depositar?"))
            saldo += Deposita
            console.log("Seu saldo agr é de",saldo)
            break;
        case 3:
            let Sacar = parseInt(prompt("Quantos Reais deseja Sacar?"))
            if (Sacar> saldo){
                console.log("Voce nao tem saldo suficiente")
            }else if(saldo>Sacar){
                console.log(saldo -= Sacar)
                console.log("Seu saldo agr é de",saldo)
            }
        break;

        case 0:
            ow = false
            break;

        default:
            console.log("seleção Errada")

    }
        
}while(ow)
