/*
Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
    buscar en ele array el elemento baz y mostrarlo console
    output =>  baz*/


const arr = ["foo", "bar", "baz", "qux", "origin","baz"];


for (let i=0,long=arr.length; i<long ;i++){

    if( arr[i]=="baz"){
        document.write("<br>la palabra baz esta en la posicion  ",i+1);
    }
}