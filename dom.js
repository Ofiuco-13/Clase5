document.querySelector('#calcular').onclick = mostrarResultados;

function mostrarResultados () {
    mostrarNumeroPromedio();
    mostrarMenorNumero();
    mostrarMayorNumero();
    mostrarNumeroFrecuente();
}

function crearArray () {
    const $numeros = document.querySelectorAll('li');
    const array = [];

    for (let i= 0; i < $numeros.length; i++) {
        array.push(Number($numeros[i].textContent));
    }
    return array;
}

function mostrarNumeroPromedio () {
    const numeros = crearArray();
    document.querySelector('#numero-promedio').textContent = 'Numero promedio: ' + obtenerNumeroPromedio(numeros);
}

function mostrarMenorNumero () {
    const numeros = crearArray();
    document.querySelector('#menor-numero').textContent = 'Menor numero: ' + obtenerMenorNumero(numeros);
}

function mostrarMayorNumero () {
    const numeros = crearArray();
    document.querySelector('#mayor-numero').textContent = 'Mayor numero: ' + obtenerMayorNumero(numeros);
}

function mostrarNumeroFrecuente () {
    const numeros = crearArray();
    document.querySelector('#numero-frecuente').textContent = 'Numero mas frecuente: ' + obtenerNumeroFrecuente(numeros);
}
