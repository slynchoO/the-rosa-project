//Select element function

const selectElement = function (element) {
    return document.querySelector(element);
}
// shte izvikam funkciqta i togava na koito i element da q dam tq shte se prehvyrli

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

// iskam da selektna html body-to i iskam da toggle classList da se otvori
menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
})


// scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    // otkyde idva animaciqta
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    // otkyde idva animaciqta
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    // otkyde idva animaciqta
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    // otkyde idva animaciqta
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});