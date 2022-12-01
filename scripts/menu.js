// nav bar
// const navBar = document.querySelector('#navBar');

// document.addEventListener('scroll', () => {
//     if(window.scrollY > 0) {
//         if(!navBar.classList.contains('bg-white')) {
//             navBar.classList.add('bg-white');
//         }
//     } else {
//         if(navBar.classList.contains('bg-white')) {
//             navBar.classList.remove('bg-white');
//         }
//     }
// });


// toggle menu
const toggleMenuBtn = document.querySelector('#toggleMenuBtn');
const bars = document.querySelectorAll('#toggleMenuBtn *');

const menu = document.querySelector('#menu');

toggleMenuBtn.addEventListener('click', () => {
    if(menu.classList.contains('w-screen')) {
        menu.classList.toggle('right-0');
        menu.classList.toggle('left-0');
        setTimeout(()=>{
            menu.classList.toggle('right-0');
            menu.classList.toggle('left-0');
        },550);
    }

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




const menuLinks = menu.querySelectorAll('div'); // this needs to be more specific
menuLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        link.classList.toggle('active');
    });
});










const searchOverlay = document.querySelector('#searchOverlay');
const searchOverlayCancel = searchOverlay.querySelector('button');

searchOverlayCancel.addEventListener('click', () => {
    searchOverlay.classList.toggle('flex');
    searchOverlay.classList.toggle('hidden');
    
    if(searchOverlay.classList.contains('flex')) {
        menu.classList.add('opacity-0');
    } else {
        menu.classList.remove('opacity-0');
    }
});



const serachBtn = document.querySelector('#serachBtn');
const serachBtnMobile = document.querySelector('#serachBtnMobile');

serachBtn.addEventListener('click', () => {
    searchOverlay.classList.toggle('flex');
    searchOverlay.classList.toggle('hidden');
    menu.classList.toggle('opacity-0');
});
serachBtnMobile.addEventListener('click', () => {
    searchOverlay.classList.toggle('flex');
    searchOverlay.classList.toggle('hidden');
    menu.classList.toggle('opacity-100');
});