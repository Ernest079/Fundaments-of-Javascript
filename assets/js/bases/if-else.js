let a = 5;

if(a>=10){
    console.log('a es mayor o igual a 10');
} else {
    console.log('a es menor a 10');
}

console.log('Fin');

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDay();
console.log({dia});

if (dia === 0 ){
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
}

let diaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}

console.log(diaSemana[dia]);