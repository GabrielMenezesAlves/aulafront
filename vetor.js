var cidade = "curitiba";
var cidade2 = "colombo";

// estrutura de dados
// vetor ou array

var lista = ["curitiba", "colombo", "araucaria"];

console.log(lista [1]);

lista.push("pinhais");
lista.unshift("maringa");

// push() add no final
// unshift() coloca no comeco
// shift() retira do comeco
// pop() retira do final
// sort() ordena em ordem alfabetica

lista.sort();


// loops = repeticoes

var lista = ["curitiba", "colombo", "araucaria"];

var ini = 0;
var fim = lista.length - 1;

while (ini <= fim)
    {
        console.log( lista[ini]);
        ini = ini + 1;
    }

    // ordem decrescente agora ( reversa ) 
    var ini = lista.length - 1;
    var fim = 0;

while (ini >= fim)
    {
        console.log( lista[ini]);
        ini = ini - 1;
    }