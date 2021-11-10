/*
Ej-4 arr = ["foo", "bar", "baz", "qux", "origin"]
    vaciar el arr
    output => [ ]*/

let arr = ["foo", "bar", "baz", "qux", "origin"];


for (let i=0,long=arr.length; i<long ;i++){
    arr.pop();
}

console.log(arr);
document.write(arr);