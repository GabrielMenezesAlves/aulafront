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
// exe4 - some o numero 1 + numero 2
// exe5 - calculo do IMC, pedir peso e altura e devolver o resultado: peso/alturaxaltura ( + soma - subtrai / divisao * multiplica)
// exe6 - pegue 2 numeros e diga qual deles e o maior.
// exe7 - pegue a idade da pessoa e diga se e crianca, adulto ou idoso

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

function ex4() {
  var n1 = num1.value;
  var n2 = num2.value;

  saida.value = parseInt(n1) + parseInt(n2);
}

// outra forma ex5
// var n1 = num1.value;
// var n2 = num2.value;
// n1 = parseFloat(n1);
// n2 = parseFloat(n2);
// var res = n1 / (n2 * n2);
// saida.value = res;

function ex5() {
  var peso = num1.value;
  var altura = num2.value;

  saida.value = parseFloat(peso) / parseFloat(altura * altura);
}

function ex6() {
  var n1 = num1.value;
  var n2 = num2.value;

  n1 = parseInt(n1);
  n2 = parseInt(n2);

  if (n1 > n2) {
    saida.value = n1;
  } else {
    saida.value = n2;
  }
}

function ex7() {
  var n1 = num1.value;

  n1 = parseInt(n1);

  // a ordem da codificacao altera o resultado, a logica tem que existir, pro programa nao bugar.
  if (n1 >= 65) {
    saida.value = "idoso";
  } else if (n1 >= 18) {
    saida.value = "adulto";
  } else {
    saida.value = "crianca";
  }
}
