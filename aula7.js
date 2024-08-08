function ex23() 
{

    var n1 = prompt("digite o num1");
    var n2 = prompt("digite o num2");
    var n3 = prompt("digite o num3");

    if (n1 > n2)
    {
        if (n1 > n3)
        {
        console.log("o maior numero e: " + n1);
        }
        else
        {
        console.log("o maior numero e: " + n3);
        }
    } else
    {
        if (n2 > n3)
            
            {
            console.log("o maior numero e: " + n2);
            }
            else
            {
            console.log("o maior numero e: " + n3);
            }
            
    }
}


function ex24() 
{

    var n1 = prompt("digite o num1");
    var n2 = prompt("digite o num2");
    var n3 = prompt("digite o num3");

    if (n1 < n2)
    {
        if (n1 < n3)
        {
        console.log("o menor numero e: " + n1);
        }
        else
        {
        console.log("o menor numero e: " + n3);
        }
    } else
    {
        if (n2 < n3)
            
            {
            console.log("o menor numero e: " + n2);
            }
            else
            {
            console.log("o menor numero e: " + n3);
            }
            
    }
}

// funcao tbm e conhecido como subprograma ou subrotina ( um programa dentro do outro )
// 
function soma(n1, n2)
{
    var resultado = n1 + n2;
    return resultado;
}
// executa a funcao
soma(3, 5);





    
    

