const status1 = 400;

if (status1 === 200) {
    console.log('OK');
} else if(status1 === 400) {
    console.log('Error!');
    
} else {
    console.log('Unknown status');
}

//Declaracion en una linea
const status2 = 200;
if (status2 === 200) console.log('OK');

//Ternario
console.log((status2 === 200) ? 'OK' : 'Error!');