let peso = parseFloat(prompt("Digite seu peso"))
let altura = parseFloat(prompt("Digite sua altura"))

let imc = peso / (altura ** 2)

if (imc < 18.5){
    alert("Você esta a baixo do peso")
}else if (imc >= 18.5 && imc <= 24.9){
    alert("Você esta com o peso normal")
}else if (imc >= 25 && imc <= 29.9){
    alert("Sobrepeso")
}else if (imc >= 30){
    alert("Obesidade")
}