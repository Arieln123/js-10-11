/*
Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
    output => javascripT
*/


let cadena = "javascript";
document.write(cadena.slice(0,cadena.length-1)+cadena.charAt(cadena.length-1).toUpperCase());