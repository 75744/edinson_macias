"use strict"

/* hallar el total (suma) */
var producto1 = 2500;
var producto2 = 3000;
var producto3 = 3500;
var totalsuma = producto1 + producto2 + producto3;
console.log("la suma de los productos es:" + totalsuma);

/* hallar el descuento */
var producto4 = 9000;
var descuento = 3000;
var totalDescuento = producto4 - descuento;
console.log("el valor total con el descuento del 33% es:" + totalDescuento);

/* hallar el totalDescuento(multiplicacion) */
var producto5 = 4000;
var cantidadProductos = 5;
var totalMultiplicacion = producto5 * cantidadProductos;
console.log("el valor total de los 5 productos es:" + totalMultiplicacion);

/* hallar el promedio de calificaciones */
var calificacion1 = 3.0;
var calificacion2 = 4.0;
var calificacion3 = 4.5;
var totalCalificaciones = 3;
var promedioFinal = (calificacion1 + calificacion2 + calificacion3) / totalCalificaciones;
promedioFinal = promedioFinal.toFixed(2);
console.log("el promedio final de calificaciones es:" + promedioFinal);

/* hallar el residuo */
console.log("==residuo==");
var ahorros = 25000;
var cantidadAportantes = 100;
var montoResidual = 0;
/* cuanto dinero corresponde a cada uno y cuanto sobra  */
var montoIndividual = parseInt(ahorros / cantidadAportantes);
console.log("el monto individual es:" + montoIndividual) ;
/* el signo de residuo es % */
var montoSobrante = (ahorros % cantidadAportantes);
console.log("el monto sobrante es de :" + montoSobrante);
console.log("el monto sobrante es:" +(ahorros -(montoIndividual*cantidadAportantes)) );