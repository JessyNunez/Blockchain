const Block = require('./block'); //siempre se omite la extensión del archivo
const BlockChain = require('./blockchain');

//let block = new Block(0,"la información", null);
//console.log(block);

const blockchain = new BlockChain("Hola a mi nueva cadena de bloques");
blockchain.addBlock("Data del segundo bloque");
blockchain.addBlock("Data del tercero bloque");
blockchain.addBlock("Data del cuarto bloque");
blockchain.addBlock("Data del quinto bloque");


console.log(blockchain);

