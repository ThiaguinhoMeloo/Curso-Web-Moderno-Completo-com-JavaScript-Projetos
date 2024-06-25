// Desafio área da Circunferencia
// PI * raio * raio -> formula de calcular a area de uma circunferencia.
// Colocar o valor final em metros quadrado.

const raio = 10;
const pi = 3.141592;
let areaCirc = pi * raio * raio;

{
    console.log("Desafio área da Circunferencia");
    console.log("Valor de PI: " + pi);
    console.log("Valor do raio: " + raio);
    console.log("Valor da área da Circunferência: " + areaCirc);
}

{
    console.log("\nDesafio área da Circunferencia com o valor de PI do JS (Math.PI)");
    console.log("Valor de PI: " + Math.PI);
    console.log("Valor do raio: " + raio);
    areaCirc = Math.PI * raio * raio;
    console.log("Valor da área da Circunferência: " + areaCirc);
}