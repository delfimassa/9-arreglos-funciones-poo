document.write("<h5>2)2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.</h5>")
 function texto(cadena) {

     if (cadena == cadena.toLowerCase()) {
         document.write("Su texto esta todo en minusculas")
     } else if (cadena == cadena.toUpperCase()) {
         document.write("Su texto esta todo en mayusculas")
     } else {
         document.write("su testo esta en mayusculas y minusculas")
     }
 }
 texto(prompt("ingrese texto aqui"));
