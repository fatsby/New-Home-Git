const toggler = document.querySelector('#toggler-btn');
toggler.addEventListener('click', function () {
    if (toggler.getAttribute('name') === 'menu') {
        toggler.setAttribute('name', 'x-circle');
    } else {
        toggler.setAttribute('name', 'menu');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('scroll', function () {
    const button = document.querySelector('.go-to-top');
    if (window.scrollY > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});