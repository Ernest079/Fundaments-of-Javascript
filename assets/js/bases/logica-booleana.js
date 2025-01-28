const regresaTrue = () =>{
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.warn('And');
console.log(true && true);
console.log(true && false);
console.log(true && !false);

console.log('=======================================');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log('================= && ==================');
regresaFalse() && regresaTrue();

console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;

console.log({a1, a2, a3, a4, a5});

if (true || true || true || false) {
    console.log('Hacer algo');
} else{
    console.log('Hacer otra cosa');
}