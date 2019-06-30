var campoFiltro = document.querySelector('#filtrar-tabela');

// novo evento de input
campoFiltro.addEventListener("input", function() {

    var pacientes = document.querySelectorAll(".paciente");

    // Se o usuário digitar algo executa o for
    if (this.value.length > 0) {
        // realizar uma busca, escondendo todos os elementos e mostrando apenas aqueles que nos interessam.
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            // buscar por apenas um pedaço de uma palavra com as Expressões Regulares em Javascript

            var expressao = new RegExp(this.value, "i")
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }

            // var comparavel = nome.substr(0, this.value.length);
            // if (!(this.value == comparavel)) {
            //     paciente.classList.add("invisivel");
            // } else {
            //     paciente.classList.remove("invisivel");
            // }

        }
        // Senão remove o class invisivel e deixa todos os pacientes aparecendo
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});