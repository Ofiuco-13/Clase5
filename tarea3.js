/*
Clase1: 2horas, 34minutos,43s.
Clase2:1hora, 48minutos, 24s.
Clase3: 47 minutos, 26s.
Clase4: 2horas, 18minutos, 45s.
Clase5: 2horas, 40minutos, 48s.
*/

function convertirTiempo(totalHoras, totalMinutos, totalSegundos) {
   totalMinutos = Math.floor(totalSegundos / 60);
   totalMinutos = totalMinutos % 60;
    
   if (totalMinutos >= 60) {
       totalHoras = totalHoras + 1;
   }

   document.querySelector('strong').innerText = `${totalHoras}hs ${totalHoras}min ${totalSegundos}s`
}


const $calcularTiempoTotal = document.querySelector('#calcular-tiempo-total');

$calcularTiempoTotal.onclick = function calcularTiempoTotal() {
    let totalHoras = document.querySelector('.horas').value;
    let totalMinutos = document.querySelector('.minutos').value;
    let totalSegundos = document.querySelector('.segundos').value;

    convertirTiempo(totalSegundos, totalMinutos, totalHoras);
        
    return false;
}

/*
horas = Math.floor(segundos / 3600)
minutos = Math.floor((segundos % 3600) / 60)
segundos = ((segundos % 3600) % 60)
*/