/*
Clase1: 2horas, 34minutos,43s.
Clase2:1hora, 48minutos, 24s.
Clase3: 47 minutos, 26s.
Clase4: 2horas, 18minutos, 45s.
Clase5: 2horas, 40minutos, 48s.
*/

function convertirTiempo(totalHoras, totalMinutos, totalSegundos) {

    let segundosEnHoras = totalHoras * 3600;
    let segundosEnMinutos = totalMinutos * 60;
    let segundos = totalSegundos + segundosEnMinutos + segundosEnHoras;

    let horas = Math.floor( segundos / 3600 );
    let minutos = Math.floor( (segundos % 3600) / 60 );
    let segundosEnTotal = segundos % 60;

    document.querySelector('strong').innerText = `El total es de ${horas}hs ${minutos}m ${segundosEnTotal}s`;
}

const $calcularTiempoTotal = document.querySelector('#calcular-tiempo-total');

$calcularTiempoTotal.onclick = () => {
    let totalHoras = document.querySelectorAll('.horas');
    let totalMinutos = document.querySelectorAll('.minutos');
    let totalSegundos = document.querySelectorAll('.segundos');

    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    const labels = document.querySelectorAll('label')

    for (i = 0; i < labels.length; ++i) {
        horasTotales += Number(totalHoras[i].value)
        minutosTotales += Number(totalMinutos[i].value)
        segundosTotales += Number(totalSegundos[i].value)

    }
    
    convertirTiempo(horasTotales, minutosTotales, segundosTotales);

    return false;
}
