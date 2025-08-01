// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    if (nombres == '') {
        alert('Introduce un nombre profavor')
    } else {
        amigos.push(nombres);
        console.log(amigos);
    }
    limpiarCaja();
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo').value = '';
}


