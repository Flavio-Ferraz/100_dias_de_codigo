var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Função para repetir o carrossel e reiniciar ao chegar no último slide
var repeat = function() {
    let i = currentSlide; // Começa do slide atual

    var repeater = () => {
        setTimeout(function() {
            slides.forEach((slide) => slide.classList.remove('active'));
            btns.forEach((btn) => btn.classList.remove('active'));

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            // Reinicia o carrossel quando atinge o último slide
            if (i >= slides.length) {
                i = 0; // Volta para o primeiro slide
            }

            repeater(); // Chama a função novamente para continuar o ciclo
        }, 2000); // Tempo entre as transições dos slides (2 segundos)
    };

    repeater();
};

repeat();
