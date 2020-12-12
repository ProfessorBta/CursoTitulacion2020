/*  
    Comentarios en 
    JavaScript
*/
// Comentar línea de código
//alert("Mi primer codigo de JS");
var a = 5; // asignar el  valor 5 a la variable a
var b = 3;
console.log("la suma de a + b = " + (a + b));
console.log("la resta de a - b = " + (a - b));
console.log("la multiplicación de a x b = " + (a * b));
console.log("la división de a / b = " + (a / b));
// Declarar Variables
var nombreAlumno = "Pedro";
var Nombre = "Juan";
var _nombreCompleto = "Juan ...";
// Mostrar en consola los valores de las varibles
console.log(nombreAlumno);
console.log(_nombreCompleto);
// Funciones
function suma() {
    let a = Number(document.forms["formulario"]["num1"].value);
    let b = Number(document.forms["formulario"]["num2"].value);
    alert("la suma de los valores es: "+(a + b));
    //console.log(a+b);
}

function calculadora(){
    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;
    var x = Number(x);
    var y = Number(y);

    var op = document.getElementById("operacion").value;
    var resultado = document.getElementById("resultado");
    
    resultado.style.fontSize="24px";

    var calc = document.getElementById("calculadora");
    calc.style.backgroundColor="lightblue";
    switch(op){
        case "sum":
            resultado.style.color="green";
            resultado.innerHTML=(x+y);
            break;
        case "res":
            resultado.style.color="red";
            resultado.innerHTML=(x-y);
            break;
        case "mul":
            resultado.style.color="blue";
            resultado.innerHTML=(x*y);
            break;
        case "div":
            resultado.style.color="orange";
            resultado.innerHTML=(x/y);
            break;
        default:
            resultado.style.color="purple";
            resultado.innerHTML="Opción no valida";
    }

}
