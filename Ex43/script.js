let verif = true
do {
    console.log("Entrando no do")
    let sele = prompt("selecione \n 1- cadastrar \n 2- consultar \n 3- alterar \n 0-sair")
    
    switch(sele){
        
        case "1":
                alert("Cadastrado")
             break;
            case "2":
                alert("Consultado")
                 break;
            case "3":
                alert("alterado")
                 break;

            case "0":
                verif = false
                break;

            default:
                alert("Opção invalida")
            }
        }    
    
    while (verif){
}