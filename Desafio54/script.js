let maior = 0
let menor = 10
for (i=0;i<10;i++){
    let num = parseInt(prompt("Digite numero interos"))
    if (maior < num){
        maior = num
    }else if (maior > num && menor > num){
        menor = num
    }
}
console.log(`O maior numero e ${maior} e o menor numero e ${menor}`)