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

//Operadores (Aritméticos. Comparação e Lógicos)

let soma = 10 +5;
console.log(soma)
let multiplicacao = 4 *2;
console.log(multiplicacao)
let subtracao = 10-5;
console.log(subtracao)
let resto= 10 % 3;
console.log(resto)
let divisao = 5 / 3;
console.log(divisao)

//comparação

let a = 10;
let b = "10"


console.log(a == b); //compara valor
console.log(a === b);//compara valor e variavel 
console.log(a >= b)// maior e igual
console.log (a > b) //maior
console.log ( a != b) //diferente
console.log( a + b) && (b -b);
console.log (a < 10);
console.log(b < a && a > b) //operador &&, as duas operacoes tem que ser verdadeiras
console.log ( a>20 || b >= a ) // operador or || - uma das operações tem que ser verdadeiras 
//=atribuição 
// ==comparar valor 
// === compara valor e tipo da variavel   

let temIdade = 17;
let habilitacao =false;


let dirigir = (temIdade >= 18) && habilitacao;
console.log("O usuario pode dirigir?", dirigir)

//ESTRUTURA CONDICIONAL 
if(false){
    console.log("É verdadeiro")
}

if(false){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}


