// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigo = agregarAmigo();
let listaAmigos = actualizarLista();
console.log(amigo);


function agregarAmigo() {
    
    let nombreUsuario = document.getElementById('amigo').value;
    console.log(nombreUsuario)
    if(nombreUsuario === " "){
        alert ("Ingresa un nombre");
        return;
    }
    amigos.push(nombreUsuario);
    actualizarLista();
    limpiarValores();
   return;     

   console.log (amigos);
}

function actualizarLista ()  { 
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);        
    });
}
function limpiarValores(){ 
    document.querySelector("#amigo").value = " ";
}

function sortearAmigo(){ 
    if (amigos.length === 0 ){ 
        document.getElementById("resultado").innerHTML = "No hay valores en la lista"
        return;
    }
let inidceAleatorio  = Math.floor(Math.random()* amigos.length);
let amigoSeleccionado = amigos [inidceAleatorio];

document.getElementById("resultado").innerHTML = "El amigo secrete selecccionado es: " + amigoSeleccionado;

}


//{ 
//}


