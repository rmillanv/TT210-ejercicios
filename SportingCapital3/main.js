/*al realizar el desplazamiento hacia abajo cambia de color */
    window.addEventListener('scroll', function() {
        const element = document.querySelector('.elementor-element');
        
        if (window.scrollY > 50) { // Cambia 50 a la cantidad de desplazamiento que prefieras
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });
