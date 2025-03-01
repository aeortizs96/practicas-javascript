const personas = ["Andrea","Eduardo","Nadyr"];
const uno = new Number(1);
const ster = "Palbra";
const b = true;
const persona = {
    nombre: "Andrea",
    apellido: "Ortiz"
}

function saludar (persona){
    console.log("Hola" + persona.nombre)
}

console.log("\n***** typeof  ****\n");
console.log(typeof personas);
console.log(typeof uno);
console.log(typeof ster);
console.log(typeof b);
console.log(typeof persona);
console.log(typeof saludar);

console.log("\n***** instanceof  ****\n");
console.log( personas instanceof Array);
console.log( uno instanceof Number);
console.log( ster instanceof String);
console.log( b instanceof Boolean);
console.log( persona instanceof Object );
console.log( saludar instanceof Function );