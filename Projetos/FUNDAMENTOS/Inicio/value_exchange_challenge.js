// Objetivo do desafio será trocar os valores da variaveis,
// de tal forma que depois da troca o valora da variavel A ira valer o valor de B

let a = 7;
let b = 94;
let temp = a;

{
    a = 94;
    b = 7;
    console.log("Troca de valores:")
    console.log("Valor de A: "+ a)
    console.log("Valor de B: " + b)
}

{
    //troca de valores com variavel temp (temporaria)
    a = b;
    b = temp;
    console.log("\n")
    console.log("Troca de valores:")
    console.log("Valor de A: "+ a)
    console.log("Valor de B: " + b)
}