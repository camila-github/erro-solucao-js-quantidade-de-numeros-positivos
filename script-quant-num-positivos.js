//SOLUCAO 1
let numPositivos = 0;
for (let i = 0; i < 7; i++) if (parseInt(gets()) > 0) numPositivos++; 
console.log(numPositivos + " valores positivos"); 

// SOLUCAO 2
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
