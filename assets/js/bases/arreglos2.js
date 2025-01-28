let series = ['Pokemon', 'Dr. House', 'Breaking Bad', 'The Big Bang Theory'];

let primero = series[2-2];
let ultimo = series[series.length - 1];

console.log({primero, ultimo});

series.forEach((elemento, indice, arr) =>{
     console.log({elemento, indice, arr});
});

let nuevaLongitud = series.push('Criminal Minds');
console.log({nuevaLongitud, series, ultimo});

nuevaLongitud = series.unshift('Haikyuu');
console.log({nuevaLongitud, series})

let serieEliminada = series.pop();
console.log({serieEliminada, series});

let pos = 1;

console.log(series);
let seriesEliminadas = series.splice(pos, 2);
console.log({seriesEliminadas, series});

