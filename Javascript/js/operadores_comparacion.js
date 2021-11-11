"use strict"

/* operadores de comparacion */
/* <...menor que 
>...mayor que
>=...mayor o igual que 
<=...menor o igual que
!=...distinto sin importar tipo de dato 
==...igual si importar tipo de dato 
===...estrictamente igual, incluyendo tipo de dato 
!==...distinto (si no son estrictamente iguales) */


/* quien ocupo el primer puesto */
var nota1 = 8.1;
var nota2 = 8.7;

/* condicionales */
if (nota1 > nota2) {
    console.log("la nota mas alta fue:" + nota1);
}
else if(nota1 < nota2) {
    console.log ("la nota mas alta fue de:" + nota2);
}
else if (nota1 === nota2) {
    console.log("las dos notas tienen el mismo valor");
}
else {
    console.log("ha surgido un eror. Verifique, por favor")
}
