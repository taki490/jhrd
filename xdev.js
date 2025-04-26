// xdev.js

let next = document.querySelector('.xdev-next');
let prev = document.querySelector('.xdev-prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.xdev-slide-item');
    document.querySelector('.xdev-slider').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.xdev-slide-item');
    document.querySelector('.xdev-slider').prepend(items[items.length - 1]);
});


