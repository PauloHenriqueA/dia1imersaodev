var nome = "Joãozinho"

var notaPrimeiroBimestre = 10
var notaSegundoBimestre = 8
var notaTerceiroBimestre = 9
var notaQuartoBimestre = 8

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFinal = notaFinal.toFixed(1)


if(notaFinal >= 7){
  console.log("Não se desespere, jovem Padawan, sua média foi " + notaFinal);
} 
else {
  console.log("Desespere-se, meu caro soldado, terá que estudar enquanto os outros jogam videogame, pois foi REPROVADO, sua média é: " + notaFinal);
}

document.getElementById("texto").innerText = "Sua média foi " + notaFinal

console.log((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4 + notaFinal);
// Revisão: 
// Variáveis: Lugares na memória do Computador, onde algum tipo de "valor" é guardado.
// string: palavras, entre aspas
// console.log: imprime algo
// toFixed: fixa quantas casas decimais terá um número
// Operações Matemáticas: +, -, *, /
// Concatenação: junção de variáveis com string, por exemplo, em um mesmo console.log ou linha de código; uso do + para juntar ambos.
