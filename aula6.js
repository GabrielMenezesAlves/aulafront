// aula 6
// console.log e somente pra programador...quando voce quer que o usuario veja, dai voce usar o ALERT por exemplo

function oi() {
  var entrada = valor.value;
  saida.value = entrada;
}

// exercicios
// exe1 - devolva o valor digitado de forma inversa ex: Gabriel = leirbaG
// exe2 - coloque o nome todo em maiusculas, ex: Bola = BOLAS
// exe3 - coloque a primeira letra em maiuscula, ex: bola = Bola

function ex1() {}

function ex2() {
  var entrada = valor.value;
  saida.value = entrada.toUpperCase();
}

function ex3() {
  var entrada = valor.value;
  var letra = entrada.charAt(0);
  var resto = entrada.substr(1);

  saida.value = letra.toUpperCase() + resto.toLowerCase();
}
