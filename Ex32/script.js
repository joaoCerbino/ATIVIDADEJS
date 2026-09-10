let num1 = parseInt(prompt("Digite um numero"))
let num2 = parseInt(prompt("Digite um numero"))
let num3 = parseInt(prompt("Digite um numero"))

if (num1 > num2 && num1 > num3){
    alert(`${num1} é o maior numero`)
}else if (num2 > num1 && num2 > num3){
    alert(`${num2} é o maior numero`)
}else if (num3 > num1 && num3 > num2){
    alert(`${num3} é o maior numero`)
}