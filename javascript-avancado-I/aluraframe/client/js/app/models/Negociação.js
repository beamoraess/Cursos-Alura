class Negociacao {
    // O underline é uma aviso ao programador que ele não deve alterar a propriedade.

    constructor(data, quantidade, valor, volume) { // Contructor define os atributos de uma classe
        this._data = new Date(data.getTime()) // Data atual como padrão
        this._quantidade = quantidade; //
        this._valor = valor; 
        this._volume = volume;
        Object.freeze(this) // Congela os valores
    }

    //* Métodos acessadores *//
    
    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
    
    get volume(){
        return this._quantidade * this._valor;
    }
}

// O get pode ser acessado como se fosse uma propriedade.