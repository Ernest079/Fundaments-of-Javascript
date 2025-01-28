let personaje = {
    nombre : 'Peter',
    codeName: 'SpiderMan',
    vivo: true,
    age: 20,
    coords:{
        lat: 34.034,
        lng: -88.50
    },
    suits: ['Negro', 'Rojo', 'Azul'],
    direction: {
        zip: '1515, 21212',
        ubication: 'Casa, Hogar'
    },
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Latitud:', personaje.coords.lat);
console.log('Numero de trajes:', personaje.suits.length);
console.log('Ultimo traje:', personaje.suits[personaje.suits.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

personaje.casado = false;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 0;
personaje.direction.ubication = 'México';

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});

