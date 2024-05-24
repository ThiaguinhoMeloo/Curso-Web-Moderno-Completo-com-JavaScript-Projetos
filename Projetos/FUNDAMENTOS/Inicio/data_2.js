// Trabalhando com Dados #2
//Valor Literal
console.log(19.90 * 0.6);

let price = 19.90;
let discount = 0.4; 
let discountPrice = price * (1 - discount);
console.log(discountPrice);

let name = "Caderno";
let category = "Papelaria";
console.log("Produto: " + name 
    + "\nCategoria: "+ category
    + "\nPreço: R$ " + price
    + "\nDesconto: " + discount + " %"
    + "\nvalor final a pagar: R$ " + discountPrice);