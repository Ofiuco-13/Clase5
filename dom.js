document.querySelector('#calcular').onclick = mostrarResultados;

function mostrarResultados () {
    const numeros = obtenerNumeros();

    mostrarNumeroPromedio(numeros);
    mostrarMenorNumero(numeros);
    mostrarMayorNumero(numeros);
    mostrarNumeroFrecuente(numeros);
}

function obtenerNumeros () {
    const $numeros = document.querySelectorAll('li');
    const array = [];

    for (let i= 0; i < $numeros.length; i++) {
        array.push(Number($numeros[i].textContent));
    }
    return array;
}

function mostrarNumeroPromedio (numeros) {
    document.querySelector('#numero-promedio').textContent = 'Numero promedio: ' + obtenerNumeroPromedio(numeros);
}

function mostrarMenorNumero (numeros) {
    document.querySelector('#menor-numero').textContent = 'Menor numero: ' + obtenerMenorNumero(numeros);
}

function mostrarMayorNumero (numeros) {
    document.querySelector('#mayor-numero').textContent = 'Mayor numero: ' + obtenerMayorNumero(numeros);
}

function mostrarNumeroFrecuente (numeros) {
    document.querySelector('#numero-frecuente').textContent = 'Numero mas frecuente: ' + obtenerNumeroFrecuente(numeros);
}

