document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    let i = 1

    while (i <= 11) {
        i++;
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenID = i;
        imagen.onclick = mostrarImagen;
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);

    }

}

function mostrarImagen(e) {
    console.log(e.target.dataset.imagenID);

}