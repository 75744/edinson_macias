  "use strict"

  var aprendiz1 = new Array();
 aprendiz1[0] = 1;
 aprendiz1[1] = "yeimi katherin";
 aprendiz1[2] = "peña ariza";
 aprendiz1[3] = 18;
 aprendiz1[4] = "B. villa del prado";
 aprendiz1[5] = 156;

 /* forma 2 */
 var aprendiz2 = new Array(2, "luisa fernanda", "ramirez montoya", 19, "B, simon bolivar", 157 );

/*  forma 3 */
var aprendiz3 =[3, "jesus nicolas", "ayerbe guarnizo", 17, "barrio las palmitas", 177];

/* ostrar el nombre completo de aprendiz N. 2 */

console.log ("nombre de aprendiz2:"+" " +aprendiz2[2]);

/* añadiendo elementos al arreglo */

aprendiz3[5] = "3134342334";
console.log (aprendiz3[5]);

/* contando elementos */
 var cantidadelementos = aprendiz1.length;

 console.log("aprendiz 1 tiene" + cantidadelementos + "  " + "elementos");

/*  contando caracteres */

var cantidadcaracteres = aprendiz2[1].length;
console.log ("cantidad de caracteres: " +cantidadcaracteres);