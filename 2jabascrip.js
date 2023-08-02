let año1 = prompt("ingrese el año actual");
let año2 = prompt("ingrese su año de nacimiento");

let edad =(parseFloat(año1)-parseFloat(año2));

console.log ("su edad es:" + edad );

if (edad <=18) {
    console.log ("no es valido" + edad );
}
//edad empresa