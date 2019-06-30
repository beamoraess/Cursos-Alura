var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    

    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        if (event.target.tagName == 'TD') {  //Se a TagName for igual a 'td' pode remover
        event.target.parentNode.remove()
    }
    },500)
});

// do array pacientes pra cada (paciente) - função
// pacientes.forEach (function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("duplo click");
//         this.remove();
//     });
// });