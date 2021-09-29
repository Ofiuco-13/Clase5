/*
Clase1: 2horas, 34minutos,43s.
Clase2:1hora, 48minutos, 24s.
Clase3: 47 minutos, 26s.
Clase4: 2horas, 18minutos, 45s.
Clase5: 2horas, 40minutos, 48s.
*/

function convertirTiempo(totalHoras, totalMinutos, totalSegundos) {
    totalHoras = Math.floor(totalHoras / 3600);
    totalMinutos = Math.floor(totalMinutos / 60);

   totalSegundos = totalHoras + totalMinutos;

    for(let i = 0; i < totalSegundos; i++) {
        if (totalSegundos >= 60) {
            totalMinutos++;
        }
        if (totalMinutos >= 60) {
            totalHoras++;
        }
    }
    document.querySelector('strong').innerText = `${totalHoras}hs ${totalMinutos}m ${totalSegundos}s`;
}

const $calcularTiempoTotal = document.querySelector('#calcular-tiempo-total');

$calcularTiempoTotal.onclick = function calcularTiempoTotal() {
    let totalHoras = Number(document.querySelectorAll('.horas').value);
    let totalMinutos = Number(document.querySelectorAll('.minutos').value);
    let totalSegundos = Number(document.querySelectorAll('.segundos').value);
    console.log(totalHoras, totalMinutos, totalSegundos);
    convertirTiempo(totalSegundos, totalMinutos, totalHoras);

    return false;
}

/*
horas = Math.floor(segundos / 3600)
minutos = Math.floor((segundos % 3600) / 60)
segundos = ((segundos % 3600) % 60)
*/