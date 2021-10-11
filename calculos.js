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
    return mayorNumero;
}

function obtenerNumeroFrecuente(numeros) {
  let masFrecuente = 1;
  let vecesRepetido = 0;
  let numeroMasFrecuente;
  for (let i = 0; i < numeros.length; i++) {
      for (let j = i; j < numeros.length; j++) {
          if (numeros[i] === numeros[j]) {
              vecesRepetido++;
          }
          if (masFrecuente < vecesRepetido) {
              masFrecuente = vecesRepetido;
              numeroMasFrecuente = numeros[i];
          }
      }
      vecesRepetido = 0;
  }
  return numeroMasFrecuente;
}

