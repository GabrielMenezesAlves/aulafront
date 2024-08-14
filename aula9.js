$(document).ready(function(){

    $("#servico").change(function(){
        var valor = $(this).val();

        $("#form-consulta, #form-banho, #form-internamento, #form-exames").addClass("d-none");

        if (valor == 10)
        {
            $("#form-consulta").removeClass("d-none");
        } else if (valor == 11)
        {
            $("#form-banho").removeClass("d-none");
        } else if (valor == 12)
        {
            $("#form-internamento").removeClass("d-none");
        } else if (valor == 13)
        {
            $("#form-exames").removeClass("d-none");
        }
    }); // fim do change servico

    $("#bt-salvar").click(function(){

        $("input, select").removeClass("is-invalid");

        if ($("#paciente").val().trim() == "")
        {
            $("#paciente").addClass("is-invalid");
        }

        if ($("#tutor").val().trim() == "")
        {
            $("#tutor").addClass("is-invalid");
        }

        if ($("#idade").val().trim() == "")
        {
            $("#idade").addClass("is-invalid");
        }
        
        if ($("#fone").val().trim() == "")
        {
            $("#fone").addClass("is-invalid");
        } else {
            // verifica um padrao
            var padrao = /\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}/gm;

            if (padrao.test($("#fone").val()) == false)
            {
                $("#fone").addClass("is-invalid");
            }

        }

        if ($("#servico").val() == "0")
        {
            $("#servico").addClass("is-invalid");
        }

        if ($(".sexo:checked").length == 0)
        {
            $(".sexo").addClass("is-invalid");
        } 
            
    }); // fim do bt-salvar

    $("#idade").keydown(function(ev){

        var padrao = /[0-9]/;

        if (padrao.test(ev.key) == false){
        
        return false;
    
    }

    }); // fim do keydown

}); // fim do document.ready