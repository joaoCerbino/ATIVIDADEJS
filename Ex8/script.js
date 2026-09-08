let idade = Number(prompt("Digite a idade da pessoa"))

if (idade <= 12){
    alert("Essa pessoa e uma Criança")
} else if(idade >= 13 && idade <= 17){
    alert("Essa pessoa e  um Adolecente")
}else if (idade >= 18 && idade <= 59){
    alert("Essa pessoa e um Adulto")
}else if (idade >= 60){
    alert("Essa pessoa e um Idoso")
}