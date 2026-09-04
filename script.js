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
});