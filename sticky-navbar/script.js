window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    })

const menuToggle = document.querySelector('.menu-toggle input');
const header = document.querySelector('header ul');

menuToggle.addEventListener('click', function () {
    header  .classList.toggle('dropdown');
})

