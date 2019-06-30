var tempoInicial = $(".tempo-digitacao").text()
$(function () {
    atualizaTamFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#btn-reiniciar").click(reiniciaJogo)
});

function atualizaTamFrase() {
    var frase = $(".frase").text(); // funcao que pega o texto do objeto
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numPalavras)
}

var campo = $(".campo-digitacao");

function inicializaContadores() {
    campo.on("input", function () {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras) // contando as palavras

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres); // contando caracteres

    })
}

function inicializaCronometro() {
    var tempoRestante = $(".tempo-digitacao").text();
    campo.one("focus", function () {
        $("#btn-reiniciar").attr("disabled", true);
        var cronometroID = setInterval(function () {
            tempoRestante--;
            // console.log(tempoRestante);
            $(".tempo-digitacao").text(tempoRestante)
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID)
                $("#btn-reiniciar").attr("disabled", false);
                campo.toggleClass("campo-desativado")
            }
        }, 1000);
    });
}

function inicializaMarcadores() {
    var frase = $(".frase").text()
    campo.on("input", function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length)
        console.log("digitado:" + digitado)
        console.log("frase c:" + comparavel)

        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha")
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde")
        }
    })
}


function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $(".tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde")
}