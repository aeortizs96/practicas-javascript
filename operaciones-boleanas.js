const name1 = 'andrea';

if (name1 === 'Andrea') {
    console.log('OK');
} else {
    console.log('Error!');
}


const status1 = 500;

if (status1 === 200) {
    console.log('OK');
} else if( status1 === 400 || status1 === 500) {
    console.log('Error!');
} else{
    console.log('Unknown status');
}


switch (status1) {
    case 200:
        console.log('hay 200');
        break;
    case 400:
    case 500:
        console.log('hay 400 o 500');
        break;
    default:
        console.log('Unknown status - other name!' );
        break;
}