//SOLUÇÃO 1
/*Contador inicia com zero */
var numPositivos = 0;
/*A Estrutura de repetição, lerá 6 entrada do gets()*/
for (var i = 0; i < 7; i++) {
    var x = gets();
    /*Será verificado se a leitura da entrada, é nulo*/
    if (x != null && x != undefined) {
        var num = parseInt(x);
        /*Se o valor recebido for maior que zero, será feito a contagem*/
        if (num > 0) {
            numPositivos++;
        }
    }
}
//imprime a quantidade de numeros positivos
console.log(contNumPositivos + " valores positivos");




//SOLUÇÃO 2 - Resumido 
numPositivos = 0; //Contador inicia com zero
for (i = 0; i < 7; i++) { //A Estrutura de repetição, lerá 6 entradas do gets()
    if ((num = gets())) { //Será verificado se a leitura de entrada, é nulo
        if (parseInt(num) > 0) numPositivos++; //Verifica se o valor é maior que zero
    }
}
console.log(numPositivos + " valores positivos"); //imprime a quantidade de numeros positivos