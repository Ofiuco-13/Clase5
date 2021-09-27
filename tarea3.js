/*
Clase1: 2horas, 34minutos,43s.
Clase2:1hora, 48minutos, 24s.
Clase3: 47 minutos, 26s.
Clase4: 2horas, 18minutos, 45s.
Clase5: 2horas, 40minutos, 48s.
*/

function calcularTiempoTotal (totalHoras, totalMinutos, totalSegundos) {
    document.querySelector('strong').innerText = `El total es ${totalHoras}hs:${totalMinutos}mins:${totalSegundos}s`
}

const $calcularTiempoTotal = document.querySelector('#calcular-tiempo-total');

$calcularTiempoTotal.onclick = function calcularTiempoTotal() {
    const totalHoras = document.querySelector('.horas').value;
    const totalMinutos = document.querySelector('.minutos').value;
    const totalSegundos = document.querySelector('.segundos').value;

    calcularTiempoTotal(totalHoras, totalMinutos, totalSegundos);

    return false;
}