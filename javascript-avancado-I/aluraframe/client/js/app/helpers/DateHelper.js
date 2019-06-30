class DateHelper{ 

    constructor() {
        throw new Error('DateHelper nao pode ser instanciada.');
    }
        
   static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    static textoParaData(texto){
    return new Date(...texto.split('-') // Transforma o array em varios itens, os ... mostra que array tem que ser desmenbrado
           .map((item, indice) => item - indice % 2))
            // if(indice == 1){
            //     return item - 1;
            // }
            // return item;
   };
}