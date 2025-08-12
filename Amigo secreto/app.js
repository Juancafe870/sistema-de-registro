// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');

    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos amigos para realizar el sorteo.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `
        <h3 class="result-title">El amigo secreto es:</h3>
        <p class="result-name">${amigoSecreto}</p>
    `;
}