const carros = ['KIA', 'FORD', 'TESLA', 'VOLKS WAGEN'];

let i = 0;

while( i < carros.length){
    console.log(carros[i]);
    i++ ;
}


console.warn('Do While');
let j = 0;
do{
    console.log(carros[j]);
    j++;
} while(j<carros.length);