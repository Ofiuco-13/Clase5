
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaNumeros = document.querySelector('#calcular');

$listaNumeros.onclick = function () {
    const numeros = document.querySelectorAll('li');
    let acumulador = 0;

    for (let i = 0; i < numeros.length; i++) {
        acumulador += Number(numeros[i].innerText);
    }

   document.querySelector('em').textContent = 'El promedio es: ' + acumulador / numeros.length;
}
