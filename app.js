// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    let listaNombres = document.querySelector('#listaAmigos');
    listaNombres.innerHTML = "";
    if (nombres == '') {
        alert('Introduce un nombre profavor')
    } else {
        amigos.push(nombres);
        console.log(amigos);
        addLista();
    }
    limpiarCaja();
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo').value = '';
}

function addLista() {
  var contenido="";
  for (i = 0; i < amigos.length; i++) {
    var nuevoElemento = document.createElement("li");           // crea un nuevo elemento
    var nuevoContenido = document.createTextNode(amigos[i]);    // y añade contenido
    nuevoElemento.appendChild(nuevoContenido);                  //añade el contenido al elemento
    document.querySelector("#listaAmigos").appendChild(nuevoElemento);
  }
}
