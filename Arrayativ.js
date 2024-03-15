let numeros = [1, 2, 3, 4, 5];
numeros.push(6, 7); // Vai adicionar os números 6 e 7 no final do Array
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7];

let numbers = [1, 2, 3, 4];
numbers.shift(); // Vai remover o primeiro elemento do Array
console.log(numbers) //[2, 3, 4];

let número = [1, 2, 3, 4];
número.pop(4); // Vai removero último elemento do Array
console.log(número) //[1, 2, 3];

let cores = ["Roxo", "Vermelho", "Branco"];
cores.unshift("Preto", "Azul"); // Vai adicionar as cores Preto e Azul ao ínicio do Array
console.log(cores) //["Preto", " Azul", "Roxo", "Vermelho", "Branco"];

let objeto = ["Cadeira", "Mesa"];
let novoObjeto = objeto.concat(["Porta", "Caneta"]); // Vai juntar os objetos (Porta) e (Caneta)
console.log(objeto) //["Cadeira", "Mesa"];
console.log(novoObjeto) //["Cadeira", "Mesa", "Porta", "Caneta"];

let maquiagens = ["Rímel", "Base", "Sombra"];
let resultado = maquiagens.join("-"); // Vai unir os elementos do Array em uma única string
console.log(resultado); //[Rímel-Base-Sombra];

let frutas = ["Morango", "Laranja", "Uva"];
console.log(frutas.includes("Laranja")); //Vai verificar a fruta que você quer descobrir se está presente nesse string

let acessórios = ["Colar", "Pulseira", "Anel"];
console.log(acessórios.indexOf("Anel")); //Vai verificar o primeiro índice em que o elemento pode ser encontrado no array

let esportes = ["Volêi", "Basquete", "Futebol", "Atletismo"];
esportes.splice(2, 1, "Baseball", "Judô"); //Vai retirar e substituir o elemento 2 (futebol) pelos outros esportes (Baseball), (Judô)
console.log(esportes); //["Volêi", "Basquete", "Baseball", "Judô", "Atletismo"];


let names = ["Eduardo", "Thiago", "Felipe", "Giovanna"];
names.reverse(); //Vai Inverter o Array
console.log(names); //["Giovanna", "Felipe", "Thiago", "Eduardo"];
