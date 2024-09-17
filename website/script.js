document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        link.classList.add('bounce');
        setTimeout(() => {
            link.classList.remove('bounce');
        }, 1000);
    });
});

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        button.classList.add('jiggle');
        setTimeout(() => {
            button.classList.remove('jiggle');
        }, 1000);
    });
});

/* Animation classes */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('animated', 'rubberBand');
    });
    
    link.addEventListener('animationend', () => {
        link.classList.remove('animated', 'rubberBand');
    });
});
