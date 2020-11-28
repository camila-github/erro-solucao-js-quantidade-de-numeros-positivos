//SOLUCAO 1
var numPositivos = 0;
for (var i = 0; i < 7; i++) {
    var x = gets();
    if (x != null && x != undefined) {
        var num = parseInt(x);
        if (num > 0) {
            numPositivos++;
        }
    }
}
console.log(contNumPositivos + " valores positivos");


//SOLUCAO 2 - Resumido 
numPositivos = 0;
for (i = 0; i < 7; i++) {
    if ((num = gets())) {
        if (parseInt(num) > 0) numPositivos++;
    }
}
console.log(numPositivos + " valores positivos");