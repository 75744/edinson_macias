/* operador condicional */
"use strict"

/* condicional simple  */
var edad = 18;
if (edad >= 18) {
    console.log("bienvenido, dirijase a la mesa de votacion")
}
/* condicional completo */
/* ambiente 1 para 20 personas */
/* ambiente 2 para 40 personas */
/* bioauditorio para 100 personas */
/* informar si no hay ambiente con capacidad  suficiente  */
/* informar si ha surgido un error */

var ambiente1 = 20;
var ambiente2 = 40;
var bioauditorio = 100;

if (ambiente1 <= 20) {
    console.log("bienvenido a hambiente 1 puede seguir")
}
if (ambiente2 <= 40) {
    console.log("bienvenido a hambiente 2 puede seguir")
}
if (bioauditorio <= 100) {
    console.log("bienvenido a hambiente bioauditorio puede seguir")
}
if (ambiente1 >= 25) {
    console.log("bienvenido a hambiente 1")
}

var cantidadpersonas = 30;
if (cantidadpersonas <= 20) {
    console.log("por favor utilice el hambiente No. 1");
}
else if (cantidadpersonas >100){
    console.log ("no hay hambiente para la cantidad de personas");
}


/* condicional anidado */
/* sistema para determinar el documentro del usuario */
/* si el usuario es menor de 10 años o mayor a 70 años tiene un descuento sobre el valor del tiquete de 10% */
/* si el destino es cartagena estos usuarios tienen discuento adicional del 10% */
/* si la aereolinea es latam a dicho destino , estos usuarios tienen descuento adicional del 10% */
var edadusuario = 71;
var aereoliniausuario = "latam";
var destinousuario = "san andres";
var valortiquetes = 250000;
var descuento = .10;
var valordescuento = (valortiquetes * .10);

if (edadusuario <= 10 || edadusuario >= 70) {
    valortiquetes = (valortiquetes - (valortiquetes * descuento));
    if (destinousuario ==="san andres") {
        valortiquetes = (valortiquetes - (valortiquetes * descuento));
       if (destinousuario ==="cartagena") {
           valortiquetes = (valortiquetes - valordescuento);
       }
        if (aereoliniausuario === "latam") {
            valortiquetes = (valortiquetes - valordescuento);
        }
    }
}
console.log("valor del tiquete: $" + valortiquetes);