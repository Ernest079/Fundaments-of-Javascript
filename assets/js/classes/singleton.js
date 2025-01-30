class Singleton {

  static #instancia;
  nombre = '';

  constructor(nombre = '') {
    if (!!Singleton.#instancia) {
      return Singleton.#instancia;
    }
    Singleton.#instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton('Batman');
const instancia2 = new Singleton('Ben Tennyson');
const instancia3 = new Singleton('Fin el Humano');

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es: ${instancia3.nombre}`);