//declarações

let nome="Fiap";
const idade =30;
let altura=1.75;
let estudante= true;

console.log(typeof nome);
console.log(typeof altura);
console.log(typeof idade);
console.log(typeof estudante);

// MÉTODOS DE EXIBIÇÃO

alert("Bem-vindo ao sistema")

let nomeUsuario= prompt("Qual é o nome do Usuario")
console.log(`Olá, ${ nomeUsuario }`)


//`` ${} = concatenacao 


let desejaContinuar = confirm("Deseja Realmente Continuar?")
console.log("Resposta",desejaContinuar)