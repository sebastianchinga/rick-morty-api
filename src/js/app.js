document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    api();
}

async function api() {
    const url = "https://rickandmortyapi.com/api/character";
    const resultado = await fetch(url);
    const respuesta = await resultado.json();
    const personajes = respuesta.results;
    mostrarPersonajes(personajes);
}

function mostrarPersonajes(personajes) {
    const tarjetas = document.querySelector('#tarjetas');
    personajes.forEach(e => {
        const imagen = document.createElement('IMG');
        imagen.classList.add('tarjeta__imagen');
        imagen.src = e.image;
        const tarjeta = document.createElement('DIV');
        tarjeta.classList.add('tarjeta');
        const titulo = document.createElement('H3');
        titulo.classList.add('tarjeta__titulo');
        titulo.textContent = e.name;

        tarjetas.appendChild(tarjeta);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
    });
}