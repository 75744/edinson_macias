"use strict"
/* operadores logicos
&&...y 
||.. o
!=... negacion
xor.. o exclusivo
 */

/* si el aprendiz tiene jovenes en accion o sisben puede acceder al subcidio de transporte
si tiene jovenes en accion y sisben no puede acceder a subcidio de transporte
si no tiene jovenes en accion y no tiene sisben tampoco puede acceder al subcidio de transporte */
var jovenaccionusuario = true;
var sisbenusuario = true;

if (jovenaccionusuario ===true ^ sisbenusuario === true) {
    console.log("usted puede acceder al beneficio de transporte");
}
else {
    !console.log("no puede acceder al servicio de transporte")
} 
