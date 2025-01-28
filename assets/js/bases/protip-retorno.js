function crearPersona (nombre, apellido){
    return{
        nombre,
        apellido
    }
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Ernesto', 'Mendoza');
console.log(persona);
const persona2 = crearPersona2('Ernesto', 'Mendoza');
console.log(persona2);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    console.log({edad, args});
}

imprimeArgumentos(12, true, false, 'Juan', 'Si');
imprimeArgumentos2(12, true, false, 'Juan', 'Si');