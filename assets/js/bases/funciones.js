function saludar(nombre){
    return 'Hola ' + nombre;
}

const saludar2 =function(nombre){
    return 'HOla ' + nombre;
}

const saludoFlecha = () => {
    return 'Hola flecha';
}

const saludoFlecha2 = (nombre) => {
    return 'Hola flecha ' + nombre;
}

let nombre = 'Ernesto'
console.log(saludar(nombre));
let saludo2=saludar2(nombre);
console.log(saludo2);

let saludo3=saludoFlecha();
console.log(saludo3);
let saludo4=saludoFlecha2(nombre);
console.log(saludo4);

function sumar(a, b){
    return a + b;    
}

const sumar2 = (a, b) => {
    return a + b;
}

//When the function only returns a value can be written like the next form:

const sumar3 = (a, b) => a + b;

console.log(sumar(1, 2));
console.log(sumar2(1, 2));
console.log(sumar3(4, 2));

function getAleatorio (){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());

