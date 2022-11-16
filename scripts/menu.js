// nav bar
const navBar = document.querySelector('#navBar');

document.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        if(!navBar.classList.contains('bg-sunset')) {
            navBar.classList.add('bg-sunset');
        }
    } else {
        if(navBar.classList.contains('bg-sunset')) {
            navBar.classList.remove('bg-sunset');
        }
    }
});


// toggle menu
const toggleMenuBtn = document.querySelector('#toggleMenuBtn');
const bars = document.querySelectorAll('#toggleMenuBtn *');

const menu = document.querySelector('#menu');

toggleMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('w-0');
    menu.classList.toggle('w-screen');
    menu.classList.toggle('px-0');
    menu.classList.toggle('px-4');

    bars[0].classList.toggle('absolute');
    bars[0].classList.toggle('rotate-45');

    bars[1].classList.toggle('opacity-0');

    bars[2].classList.toggle('absolute');
    bars[2].classList.toggle('-rotate-45');

    document.body.classList.toggle('overflow-hidden');

});