document.addEventListener('DOMContentLoaded', function() {
    scrollnav();
    navegacionFija();
});

function navegacionFija() {

    const barra = document.querySelector('.header');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });

    observer.observe(document.querySelector('.sobre-festival'));
}

function scrollnav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            if (seccion == null) {
                console.log(e.target.attributes.href.value);
            } else {
                console.log(e.target.attributes.href.value);
                seccion.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}