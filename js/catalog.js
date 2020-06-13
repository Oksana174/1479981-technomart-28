// модальное окно в каталоге 

let btnsBuy = document.querySelectorAll('.catalog-list__btn--buy');
let modalCheckout = document.querySelector('.modal-checkout');
let checkoutClosed = document.querySelector('.checkout-close');

btnsBuy.forEach(function (el) {
    el.addEventListener('click', function (evt) {
    evt.preventDefault ();
    modalCheckout.classList.add('modal-show');
    });
});

checkoutClosed.addEventListener('click', function (evt) {
    evt.preventDefault ();
    modalCheckout.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if ( modalCheckout.classList.contains("modal-show")) {
            evt.preventDefault();
            modalCheckout.classList.remove("modal-show");
        }
    }
});


// Каталог, cмена фона в шапке у кнопок закладки и корзина

let btnBookmark = document.querySelector('.menu-top__link--bookmark');
let btnBasket = document.querySelector('.menu-top__link--basket');
let catalogBuy = document.querySelectorAll('.catalog-list__btn--buy');
let catalogBookmarks = document.querySelectorAll('.catalog-list__btn--bookmarks');

catalogBuy.forEach(function (buy) {
    buy.addEventListener('click', function (evt) {
    evt.preventDefault ();
    btnBasket.classList.add('menu-top__link-work');
    });
});

catalogBookmarks.forEach(function (bm) {
    bm.addEventListener('click', function (evt) {
    evt.preventDefault ();
    btnBookmark.classList.add('menu-top__link-work');
    });
});