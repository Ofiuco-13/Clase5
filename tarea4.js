
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function calcularMinimoYMaximo(numeros) {
    let nuevoArray = [];
    for (let i = 0; i < numeros.length; i++) {
        nuevoArray.push(Number(numeros[i].innerText));
    }

    const minimo = Math.min.apply(null, nuevoArray);
    const maximo = Math.max.apply(null, nuevoArray);

    document.querySelector('#minimo').textContent = `El numero minimo es ${minimo}`;
    document.querySelector('#maximo').textContent = `El numero maximo es ${maximo}`;
}

function encontrarNumeroRepetido(numeros) {
    let nuevoArray = [];
    let frecuente = [];

    for (let i = 0; i < numeros.length; i++) {
        nuevoArray.push(Number(numeros[i].innerText));
    }

    for(let i = 0; i < nuevoArray.length; i++) {
        for(let j = i + 1; j < nuevoArray.length; j++) {
            if (nuevoArray[i] === nuevoArray[j] && !frecuente.includes(nuevoArray[i])) {
               frecuente.push(nuevoArray[i]);
            }
        }
    }

    document.querySelector('#frecuente').textContent = `El numero mas frecuente es: ${frecuente}`;
}

const $listaNumeros = document.querySelector('#calcular');

$listaNumeros.onclick = function () {
    const numeros = document.querySelectorAll('li');
    let acumulador = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        acumulador += Number(numeros[i].innerText);
    }


   document.querySelector('#promedio').textContent = 'El promedio es: ' + acumulador / numeros.length;

   calcularMinimoYMaximo(numeros);
   encontrarNumeroRepetido(numeros);

   return false;
}

