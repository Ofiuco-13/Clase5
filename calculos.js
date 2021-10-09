function obtenerNumeroPromedio(numeros) {
    let acumulador = 0;

    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return acumulador / numeros.length;
}

function obtenerMenorNumero(numeros) {
    let menorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    return menorNumero;
}

function obtenerMayorNumero(numeros) {
    let mayorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayorNumero) {
            mayorNumero = numeros[i];
        }
    }
    return mayorNumero
}

function obtenerNumeroFrecuente(numeros) {
    let numeroRepeticiones = [0]
    let numeroMasFrecuente = [0];

    for(let i = 0; i < numeros.length; i++) {
        let frecuente = [];
        for(let j = i + 1; j <= numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                frecuente.push(numeros[i]);
                console.log(frecuente);
            }
        }
        if (frecuente.length > numeroRepeticiones) {
            numeroRepeticiones[1] = frecuente.length;
            numeroMasFrecuente[0] = frecuente[0];
        } 
    }
    return numeroMasFrecuente[0];
}

