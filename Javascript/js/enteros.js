"use strict"

var costoSinIva = 32000;
var costoIva = 3200;
var Domicilio = 2000;
var costoTotal = costoSinIva + costoIva + Domicilio
/* mostrar cual es el valor final del producto */

console.log ("El ocsto total es de:" +costoTotal);
console.log ("El limite para usar un entero es:" +Number.MAX_SAFE_INTEGER)
var numMaximo = Number.MAX_SAFE_INTEGER;
/* la siguiente operacion genera un error por sobrepasar el numero maximo disponible */
console.log(numMaximo+1)