let num1 = parseFloat(prompt("Digite um numero"))
let op = prompt("Qual operação deseja +, -, * ,/")
let num2 = parseFloat(prompt("Digite um numero"))

switch (op){
    case "+":
        alert(num1 + num2)
    break;
    case "-":
        alert(num1 - num2)
    break;
    case "*":
        alert(num1 * num2)
    break;
    case "/":
        alert(num1 / num2)
    break;
    
    default:
        alert("Operação invalida ")
}