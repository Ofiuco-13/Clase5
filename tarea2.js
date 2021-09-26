
function generarBienvenida (primerNombre) {
    document.querySelector('h1').innerText = `Hola ${primerNombre}!`;
}

function generarDatos (primerNombre, segundoNombre, apellido) {
    document.querySelector('div').innerText = `Tus datos de usuario son: ${primerNombre} ${segundoNombre} ${apellido}`
    document.querySelector('div').style.marginTop = '1em';
}

const $generarBienvenida = document.querySelector('#generar-bienvenida');

$generarBienvenida.onclick = function () {
    const primerNombre = document.querySelector('#primer-nombre').value;
    const segundoNombre = document.querySelector('#segundo-nombre').value;
    const apellido = document.querySelector('#apellido').value;  
    
    generarBienvenida(primerNombre);
    generarDatos(primerNombre, segundoNombre, apellido);
    
    return false;
}