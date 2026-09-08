let num1 = Number(prompt("Digite a primeira nota "))
let num2 = Number(prompt("Digite a segunda nota "))
let fre = Number(prompt("Qual a frequência do aluno"))

if ((num1 + num2) / 2 >= 7 && fre >= 75){
    alert("Aluno Aprovado")
}else{
    alert("Aluno Reprovado")
}