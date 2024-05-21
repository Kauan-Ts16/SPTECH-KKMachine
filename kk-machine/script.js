document.addEventListener('DOMContentLoaded', function () {

    function realTime() {

        // INPUTS

        var numero = document.getElementById('inp_numero').value;
        var base = Number(document.getElementById('s_base').value);


        // VARIAVEL DOS CARACTERES PERMITIDOS

        var caracteresPermitidos = '';


        // VERIFICA QUAL É A BASE E DETERMINA OS CARACTERES PERMITIDOS

        if (base == '2') {
            caracteresPermitidos = '01';
        }

        else if (base == '8') {
            caracteresPermitidos = '01234567';
        }

        else if (base == '10') {
            caracteresPermitidos = '0123456789';
        }

        else {
            caracteresPermitidos = '0123456789ABCDEFabcdef';
        }


        // PERCORRE O INPUT DO USUÁRIO E VERIFICA SE OS CARACTERES SÃO VÁLIDOS

        for (var i = 0; i < numero.length; i++) {
            if (caracteresPermitidos.indexOf(numero[i]) === -1) {

                alert("Caractere Inválido!")

                // LIMPA AS INPUTS

                document.getElementById('inp_numero').value = "";
                document.getElementById('r1').value = "";
                document.getElementById('r2').value = "";
                document.getElementById('r3').value = "";

                return;
            }
        }


        // CONVERTENDO OS VALORES

        var global = parseInt(numero, base)

        var d = global.toString(10);
        var b = global.toString(2);
        var o = global.toString(8);
        var h = global.toString(16).toUpperCase();


        // VERIFICA SE O VALOR DA VARIAVEL CORRESPONDE A SUA BASE OU NÃO É (isNaN - undefined), CASO CONTRÁRIO, RECEBE UMA STRING VAZIA

        var decimal = !isNaN(d) ? d : '';
        var binario = !isNaN(b) ? b : '';
        var octal = !isNaN(o) ? o : '';
        var hexa = (h !== undefined && /^[0-9A-Fa-f]+$/.test(h)) ? h : '';


        // VERIFICA A BASE PARA MOSTRAR O RESULTADO AO USUÁRIO

        if (base == 2) {

            p1.innerText = "O seu número na base Octal é "
            p2.innerText = "O seu número na base Decimal é "
            p3.innerText = "O seu número na base Hexadecimal é "

            atualizarCampos(octal, decimal, hexa)

        }

        else if (base == 8) {

            p1.innerText = "O seu número na base Binaria é "
            p2.innerText = "O seu número na base Decimal é "
            p3.innerText = "O seu número na base Hexadecimal é "

            atualizarCampos(binario, decimal, hexa)

        }

        else if (base == 10) {

            p1.innerText = "O seu número na base Binaria é "
            p2.innerText = "O seu número na base Octal é "
            p3.innerText = "O seu número na base Hexadecimal é "

            atualizarCampos(binario, octal, hexa)

        }

        else if (base == 16) {

            p1.innerText = "O seu número na base Binaria é "
            p2.innerText = "O seu número na base Octal é "
            p3.innerText = "O seu número na base Decimal é "

            atualizarCampos(binario, octal, decimal)

        }

    }


    // CHAMA A FUNCTION realTime SEMPRE QUE OCORRE UMA INTERAÇÃO COM O INPUT OU SELECT

    document.getElementById('inp_numero').addEventListener('input', realTime);
    document.getElementById('s_base').addEventListener('change', realTime);

});


// FUNÇÃO QUE ATUALIZA OS CAMPOS

function atualizarCampos(b1, b2, b3) {

    document.getElementById('r1').value = b1
    document.getElementById('r2').value = b2
    document.getElementById('r3').value = b3;

}