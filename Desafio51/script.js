let quant = parseInt(prompt("Quantas notas são?"))
var soma = 0
for(i=0;i!= quant;i++){
    var nota = parseFloat(prompt("Digite a nota "))
    soma += nota
}

if(soma / quant < 5){
    console.log("O aluno está de Reprovado")
}else if(soma / quant >=5 && soma / quant <= 6.9){
    console.log("O aluno está de Recuperação")
}else if (soma / quant >= 7){
    console.log("O aluno esta Aprovado")
}