document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interacción de los botones de filtro (Galería Sonora)
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // 2. Interacción básica de los indicadores del carrusel
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // 3. Lógica del carrusel Hero
    const slides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.h-dot');
    const prevHeroBtn = document.querySelector('.prev-hero');
    const nextHeroBtn = document.querySelector('.next-hero');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let heroInterval;

    function updateHeroCarousel() {
        slides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        if(slides[currentSlide]) slides[currentSlide].classList.add('active');
        if(heroDots[currentSlide]) heroDots[currentSlide].classList.add('active');
    }

    function nextHeroSlide() {
        if(totalSlides > 0) {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateHeroCarousel();
        }
    }

    function prevHeroSlide() {
        if(totalSlides > 0) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateHeroCarousel();
        }
    }

    function resetHeroInterval() {
        clearInterval(heroInterval);
        heroInterval = setInterval(nextHeroSlide, 5000);
    }

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

    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateHeroCarousel();
            resetHeroInterval();
        });
    });

    if(totalSlides > 0) {
        heroInterval = setInterval(nextHeroSlide, 5000);
    }

    // 4. Línea de tiempo (Colegio)
    const yearButtons = document.querySelectorAll('.year-btn');
    const timelinePanels = document.querySelectorAll('.timeline-panel');

    if (yearButtons.length > 0) {
        yearButtons.forEach(button => {
            button.addEventListener('click', () => {
                yearButtons.forEach(btn => btn.classList.remove('active'));
                timelinePanels.forEach(panel => panel.classList.remove('active'));

                button.classList.add('active');

                const year = button.getAttribute('data-year');
                const targetPanel = document.getElementById(`panel-${year}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // 5. Lógica de Galería Sonora
    const soundFilterButtons = document.querySelectorAll('.sound-gallery .filter-btn');
    const soundPanels = document.querySelectorAll('.sound-panel');

    if (soundFilterButtons.length > 0 && soundPanels.length > 0) {
        soundFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                soundFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const category = button.getAttribute('data-category');

                soundPanels.forEach(panel => {
                    if (panel.id === `panel-${category}`) {
                        panel.style.display = 'flex';
                        panel.classList.add('active');
                    } else {
                        panel.style.display = 'none';
                        panel.classList.remove('active');
                    }
                });
            });
        });

        const soundPrev = document.getElementById('soundPrev');
        const soundNext = document.getElementById('soundNext');

        function toggleSoundPanel() {
            const currentActiveBtn = document.querySelector('.sound-gallery .filter-btn.active');
            const otherBtn = Array.from(soundFilterButtons).find(btn => btn !== currentActiveBtn);
            if (otherBtn) {
                otherBtn.click();
            }
        }

        if (soundPrev) soundPrev.addEventListener('click', toggleSoundPanel);
        if (soundNext) soundNext.addEventListener('click', toggleSoundPanel);
    }

    // 6. Carrusel Archivo Histórico
    const archiveCarousel = document.querySelector('.archive-carousel');
    const prevArchiveBtn = document.querySelector('.prev-archive');
    const nextArchiveBtn = document.querySelector('.next-archive');

    if (archiveCarousel && prevArchiveBtn && nextArchiveBtn) {
        const scrollAmount = 320; 

        nextArchiveBtn.addEventListener('click', () => {
            archiveCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevArchiveBtn.addEventListener('click', () => {
            archiveCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // 7. Botones de cierre de Niqui
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

    const closeBtn = document.getElementById('closeNiqui');
    const niquiBox = document.getElementById('niquiBox');
    if (closeBtn && niquiBox) {
        closeBtn.addEventListener('click', () => {
            niquiBox.style.display = 'none';
        });
    }

    const closeBtnGallery = document.getElementById('closeNiquiGallery');
    const niquiGalleryBox = document.getElementById('niquiGalleryBox');
    if (closeBtnGallery && niquiGalleryBox) {
        closeBtnGallery.addEventListener('click', () => {
            niquiGalleryBox.style.display = 'none';
        });
    }

    // 8. Control de menú desplegable en móviles corregido para clics directos en .has-dropdown
    const dropdowns = document.querySelectorAll('.has-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.stopPropagation();
                
                // Cierra los demás menús abiertos
                dropdowns.forEach(item => {
                    if (item !== dropdown) item.classList.remove('open');
                });
                
                // Alterna la clase open en el menú actual
                dropdown.classList.toggle('open');
            }
        });
    });

    // Cierra el menú al hacer clic en cualquier otra parte de la pantalla
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !e.target.closest('.has-dropdown')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
    });
    // 9. Cierre de Niqui en la nueva Galería Visual
    const closeBtnGaleriaVisual = document.getElementById('closeBtnGaleriaVisual');
    const niquiBoxGaleriaVisual = document.getElementById('niquiBoxGaleriaVisual');
    if (closeBtnGaleriaVisual && niquiBoxGaleriaVisual) {
        closeBtnGaleriaVisual.addEventListener('click', () => {
            niquiBoxGaleriaVisual.style.display = 'none';
        });
    }

    // 10. Lógica del Modal (Popup) interactivo de los Murales
    const murals = document.querySelectorAll('.mural-item');
    const modal = document.getElementById('muralModal');
    
    if (murals.length > 0 && modal) {
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const closeModalBtn = document.getElementById('closeMuralModal');

        // Al hacer clic en cualquier mural, inyecta su título, descripción e imagen en el modal
        murals.forEach(mural => {
            mural.addEventListener('click', () => {
                const imgSrc = mural.querySelector('img').src;
                const title = mural.getAttribute('data-title');
                const desc = mural.getAttribute('data-desc');

                modalImg.src = imgSrc;
                modalTitle.textContent = title;
                modalDesc.textContent = desc;

                modal.classList.add('active');
                // Evita que el fondo haga scroll mientras el modal está abierto
                document.body.style.overflow = 'hidden'; 
            });
        });

        // Cerrar modal al tocar la X
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Cerrar modal al tocar la parte oscura afuera de la tarjeta blanca
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    // Menú Hamburguesa Responsive
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Cierra el menú automáticamente al hacer clic en cualquier opción
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

});