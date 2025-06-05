const toggler = document.querySelector('#toggler-btn');
toggler.addEventListener('click', function () {
    if (toggler.getAttribute('name') === 'menu') {
        toggler.setAttribute('name', 'x-circle');
    } else {
        toggler.setAttribute('name', 'menu');
    }
});