let nu1 = parseInt(prompt("Digite um numero"))
let nu2 = parseInt(prompt("Digite um numero"))

function maior(num1,num2){
    return num1 > num2?`O ${num1} e o maior numero`: `O ${num2} e o maior numero`
}

alert(maior(nu1,nu2))