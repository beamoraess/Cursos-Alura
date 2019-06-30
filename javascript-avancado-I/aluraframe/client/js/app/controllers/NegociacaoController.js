class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // mantem a associacao do objeto (document) com a funcao (querySelector).
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor.value
        );

        console.log(DateHelper.dataParaTexto(negociacao.data));
        console.log(negociacao)
        //adicionar negociacao em uma lista
    }
}