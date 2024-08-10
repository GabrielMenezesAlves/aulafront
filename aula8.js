// pedi uma funcao da qual ele nao le devido ao programa ler somente ate a linha que ele pega...
// por isso pedimos o document.ready pra que puxe tudo assim que o site esteja pronto...conforme abaixo
// da forma debaixo...e igual se tivesse chamado uma funcao fora do Jquery, mais ali fizemos de forma mais facil e resumida.
$("h1").css("color", "red");

$(document).ready(function()
{
    $("h1").css("color", "red");

    $(".bt-add").click(function()
    {
        var cidade = $("#cidade").val();
        var lista = $("#lista").html();
        
        // add somente se o valor nao for vazio ( != significa diferente )
        if (cidade != "")
        {
            // add somente se nao foi add antes
            if(lista.search(cidade) == -1)
        
            {
            $("#lista").append("<li>"+ cidade +"</li>");
            $("#cidade").val("");
            }
        }    

    });

});


