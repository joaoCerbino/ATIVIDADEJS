let idade = parseInt(prompt("Digite sua idade"))

if (idade <= 11){
    alert("Você ainda e um pequeno fedelho")
}
else if (idade >= 12 && idade <= 17){
    alert("Você e um adolecente")
}
else if (idade >= 18 && idade <= 60){
    alert("Você e um adulto")
}else{
    alert("Você e um Idoso")
}