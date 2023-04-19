//import normalmente en el front end
//en back end con node js se usa common js usando la palabra reservada require
const SHA256 = require('crypto-js/sha256');

class Block{
    // Index = Posición del bloque en la cadena.
    // Data = El contenido de la cadena de bloques.
    // previousHash = Valor del bloque anterior de la cadena.
    // date = fecha de creación del bloque.
    // hash = validación como cadena original.
    // nounce = 
                                //se está inicializando un atributo con valor default.
    constructor(index, data, previousHash=''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.hash = this.createdHash();
        this.nounce = 0;
    }

    createdHash(){
        const originalChain = `${this.index}${this.data}${this.date}${this.nounce}`;
        return SHA256(originalChain).toString();
    }

    mine(dif){
        while(!this.hash.toString().startsWith(dif)){
            this.nounce++;
            this.hash = this.createdHash();
        }
    }
}


module.exports = Block;//Significa que quiero exportar hacia el exterior algo de mi archivo.

// Cifrados 
// Simétricos y asimétricos
// Depende de si son reversibles o no.

//SHA es un algoritmo simétrico e irreversible.
