document.addEventListener('DOMContentLoaded', () => {
    
    // Evitar que los enlaces con "#" recarguen la página
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', (e) => {
            if(el.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // Interacción de los botones de filtro (Galería Sonora)
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Interacción básica de los indicadores del carrusel
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });
// --- LÓGICA DEL CARRUSEL HERO ---
    const slides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.h-dot');
    const prevHeroBtn = document.querySelector('.prev-hero');
    const nextHeroBtn = document.querySelector('.next-hero');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let heroInterval;

    // Función para actualizar las clases activas
    function updateHeroCarousel() {
        slides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        slides[currentSlide].classList.add('active');
        heroDots[currentSlide].classList.add('active');
    }

    // Ir a la siguiente imagen
    function nextHeroSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateHeroCarousel();
    }

    // Ir a la imagen anterior
    function prevHeroSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateHeroCarousel();
    }

    // Reiniciar el contador automático si el usuario hace clic manualmente
    function resetHeroInterval() {
        clearInterval(heroInterval);
        heroInterval = setInterval(nextHeroSlide, 5000); // 5000ms = 5 segundos
    }

    // Eventos para las flechas
    if(nextHeroBtn && prevHeroBtn) {
        nextHeroBtn.addEventListener('click', () => {
            nextHeroSlide();
            resetHeroInterval();
        });

        prevHeroBtn.addEventListener('click', () => {
            prevHeroSlide();
            resetHeroInterval();
        });
    }

    // Eventos para los puntos indicadores de abajo
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateHeroCarousel();
            resetHeroInterval();
        });
    });

    // Iniciar el temporizador automático
    heroInterval = setInterval(nextHeroSlide, 5000);
    // --------------------------------

    const yearButtons = document.querySelectorAll('.year-btn');
const timelinePanels = document.querySelectorAll('.timeline-panel');

if (yearButtons.length > 0) {
    yearButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover 'active' de todos los botones y paneles
            yearButtons.forEach(btn => btn.classList.remove('active'));
            timelinePanels.forEach(panel => panel.classList.remove('active'));

            // Agregar 'active' al botón clickeado
            button.classList.add('active');

            // Mostrar el panel correspondiente
            const year = button.getAttribute('data-year');
            const targetPanel = document.getElementById(`panel-${year}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// --- LÓGICA CARRUSEL ARCHIVO HISTÓRICO ---
const archiveCarousel = document.querySelector('.archive-carousel');
const prevArchiveBtn = document.querySelector('.prev-archive');
const nextArchiveBtn = document.querySelector('.next-archive');

if (archiveCarousel && prevArchiveBtn && nextArchiveBtn) {
    const scrollAmount = 320; // Ancho de la tarjeta + gap

    nextArchiveBtn.addEventListener('click', () => {
        archiveCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevArchiveBtn.addEventListener('click', () => {
        archiveCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
}

const closeBtnMuseo = document.getElementById('closeBtnMuseo');
const niquiBoxMuseo = document.getElementById('niquiBoxMuseo');

if (closeBtnMuseo && niquiBoxMuseo) {
    closeBtnMuseo.addEventListener('click', () => {
        niquiBoxMuseo.style.display = 'none';
    });
}

const closeBtnColegio = document.getElementById('closeBtnColegio');
const niquiBoxColegio = document.getElementById('niquiBoxColegio');

if (closeBtnColegio && niquiBoxColegio) {
    closeBtnColegio.addEventListener('click', () => {
        niquiBoxColegio.style.display = 'none';
    });
}

});

// --- LÓGICA PARA CERRAR EL CUADRO DE NIQUI ---
    const closeBtn = document.getElementById('closeNiqui');
    const niquiBox = document.getElementById('niquiBox');

    if (closeBtn && niquiBox) {
        closeBtn.addEventListener('click', () => {
            niquiBox.style.display = 'none'; // Oculta el cuadro al hacer clic
        });
    }
// --- LÓGICA PARA CERRAR EL CUADRO DE NIQUI EN GALERÍA SONORA ---
    const closeBtnGallery = document.getElementById('closeNiquiGallery');
    const niquiGalleryBox = document.getElementById('niquiGalleryBox');

    if (closeBtnGallery && niquiGalleryBox) {
        closeBtnGallery.addEventListener('click', () => {
            niquiGalleryBox.style.display = 'none'; // Oculta el cuadro al hacer clic en la X
        });
    }