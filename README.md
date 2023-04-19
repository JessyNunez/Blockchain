# Blockchain
Práctica | Crear un Blockchain con node.js

##Práctica Blockchain

Práctica | Crear un Blockchain con node.js Desarrollo Basado en Plataformas

Unidad II Conceptos Básicos de las Plataformas Web

###Instrucciones
 Vamos a aplicar nuestros conocimientos adquiridos de Javascript y de Node.Js para programar un blockchain, para esto sigue los siguientes pasos:

1.- Genera una clase Block como modelo con los siguientes atributos:

a. Index = Identificador de la posición del bloque en la cadena. b. Data = El contenido del bloque c. previousHash = Valor del bloque anterior de la cadena 2.- Genera una clase Blockchain.

3 .- Mediante la clase Blockchain manipula elementos Block para poder generar la cadena de bloques.

4 .- Genera un método mine que calcule el nuevo hash del bloque según su dificultad.

Sube la liga de gitlab con el proyecto generado.

Lenguaje de Programación JavaScript (Node.js v18.13.0.)

Autor Jessica Melissa Núñez Castro Usuario: JessyNunez Matricula: 348509

Funcionamiento Esta práctica implementa un blockchain básico utilizando Node.js y Javascript. Consiste en una cadena de bloques, cada uno conteniendo un índice, datos y el hash del bloque anterior.

La implementación incluye dos clases: Block y Blockchain.

La clase Block representa un bloque individual de la cadena y tiene tres atributos: index, data y previousHash. El atributo index es un identificador para la posición del bloque en la cadena, data contiene el contenido del bloque y previousHash es el valor hash del bloque anterior en la cadena.

El programa incluye un método mine que calcula el nuevo hash del bloque según su dificultad. Este método es el encargado de "minar" nuevos bloques y agregarlos a la cadena y que el hash empieze con tripe 0 en este caso.

La clase Blockchain se encarga de manipular y agregar bloques a la cadena de bloques. Se inicializa con un primer bloque, que es el primer bloque de la cadena y también se inicializa la dificultad, que en este caso es el string que queremos que tenga como primeros valoras el hash.

La clase cuenta con metodos como:

createFirstBlock: Para crear el primer bloque de la cadena. getLastBlock: Para obtener el bloque pasado. addBlock: Para añadir un bloque a la cadena.