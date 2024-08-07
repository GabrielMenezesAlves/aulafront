//Exercicio 021
//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

//Exercicio 022
//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function ex1() {
    var entrada = valor.value;
    saida.value = entrada;

    
    if (entrada == "f") {
        saida.value = "Feminino";
    } else if (entrada == "m") {
        saida.value = "Masculino";
    } else {
        saida.value = "Outro";
    }

}

function ex2() {
    var entrada = valor.value;
    saida.value = entrada;

    if (entrada == "a"){
        saida.value = "vogal";
    } else
    if (entrada == "e"){
        saida.value = "vogal";
    } else
    if (entrada == "i"){
        saida.value = "vogal";
    } else
    if (entrada == "o"){
        saida.value = "vogal";
    } else
    if (entrada == "u"){
        saida.value = "vogal";
    } else {
        saida.value = "consoante";
    }

}