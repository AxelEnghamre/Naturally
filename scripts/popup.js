const popup = document.querySelector('#popup');
const exitPopup = popup.querySelector('div img');

const products = document.querySelector('#carousel');

let popupHasBeenShown = false

window.addEventListener('scroll',()=>{
    const buttomOfScreen = parseInt(window.scrollY+window.innerHeight);

    const productsFromTop = parseInt(products.offsetTop - products.scrollTop + products.clientTop);


    if(buttomOfScreen >= productsFromTop - 20 && buttomOfScreen <= productsFromTop + 20 && !popupHasBeenShown) {
        popupHasBeenShown = true
        popup.classList.add('grid');
        popup.classList.remove('hidden');
    }
});

exitPopup.addEventListener('click', ()=>{
    popup.classList.remove('grid');
    popup.classList.add('hidden');
});

