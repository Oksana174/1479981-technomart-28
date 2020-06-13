//  Форма обратной связи

let buttonWrite = document.querySelector('.btn-contact');
let modalContact = document.querySelector('.modal-contact');
let closeContact = document.querySelector('.modal__closed');
let modalName = document.querySelector('#modal-name');
let modalForm = document.querySelector('.modal__form');
let modalEmail = document.querySelector('#modal-email');
let modalLetter = document.querySelector('#modal-letter');

let isStorageSupport = true;
let storage = "";
let email = "";

try {
    storage = localStorage.getItem("name");
    email = localStorage.getItem("email")
} catch (err) {
	isStorageSupport = false;
}

buttonWrite.addEventListener ('click', function (evt) {
    evt.preventDefault ();
    modalContact.classList.add('modal-show');
    if (storage) {
            modalName.value = storage;
            modalEmail.focus();
    } else {
            modalName.focus();
    }
    if (email) {
        modalEmail.value = email;
        modalLetter.focus();
}   else {
        modalEmail.focus();
}
});

closeContact.addEventListener ('click', function (evt) {
    evt.preventDefault ();
    modalContact.classList.remove('modal-show');
    modalContact.classList.remove('modal-error');
});

modalForm.addEventListener ('submit', function (evt) {
    if (!modalName.value || !modalEmail.value || !modalLetter.value) {
            evt.preventDefault ();
            modalContact.classList.remove('modal-error');
            modalContact.offsetWidth = modalContact.offsetWidth;
            modalContact.classList.add('modal-error');       
    }   else {
            localStorage.setItem('name', modalName.value);
            localStorage.setItem('email', modalEmail.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if ( modalContact.classList.contains("modal-show")) {
            evt.preventDefault();
            modalContact.classList.remove("modal-show");
            modalContact.classList.remove('modal-error');
        }
    }
});

// модальное окно с картой

let mapLink = document.querySelector('.contacts__map');
let modalMap = document.querySelector('.modal-map');
let mapClosed = document.querySelector('.map-closed');

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault ();
    modalMap.classList.add('modal-show');
});
mapClosed.addEventListener('click', function (evt) {
    evt.preventDefault ();
    modalMap.classList.remove('modal-show');
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if ( modalMap.classList.contains("modal-show")) {
            evt.preventDefault();
            modalMap.classList.remove("modal-show");
        }
    }
});

// слайдер в блоке сервисы

let btnDelivery = document.querySelector(".services__btn-delivery");
let btnGuarantee = document.querySelector(".services__btn-guarantee");
let btnCredit = document.querySelector(".services__btn-credit");
let slideDelivery = document.querySelector(".services__slide-delivery");
let slideGuarantee = document.querySelector(".services__slide-guarantee");
let slideCredit = document.querySelector(".services__slide-credit");

btnDelivery.addEventListener('click', function (evt) {
    evt.preventDefault ();
    btnDelivery.classList.add('current');
    slideDelivery.classList.add('services-active');
    btnGuarantee .classList.remove('current');
    slideGuarantee.classList.remove('services-active');
    btnCredit.classList.remove('current');
    slideCredit.classList.remove('services-active');
});

btnGuarantee.addEventListener('click', function (evt) {
    evt.preventDefault ();
    btnGuarantee .classList.add('current');
    slideGuarantee.classList.add('services-active');
    btnDelivery.classList.remove('current');
    slideDelivery.classList.remove('services-active');
    btnCredit.classList.remove('current');
    slideCredit.classList.remove('services-active');
});

btnCredit.addEventListener('click', function (evt) {
    evt.preventDefault ();
    btnCredit.classList.add('current');
    slideCredit.classList.add('services-active');
    btnGuarantee .classList.remove('current');
    slideGuarantee.classList.remove('services-active');
    btnDelivery.classList.remove('current');
    slideDelivery.classList.remove('services-active');
});


// слайдер фотографий в промо блоке

let btnRight=document.querySelector(".slider__btn-right");
let btnLeft=document.querySelector(".slider__btn-left");
let sliderPromo = document.querySelector(".slider");
let sliderFirst = document.querySelector(".slider__item-one");
let sliderSecond = document.querySelector(".slider__item-two");

btnRight.addEventListener('click', function (evt) {
    evt.preventDefault ();
    sliderPromo.classList.toggle('slider__slide-1');
    sliderFirst.classList.toggle('slide-active');
    sliderPromo.classList.toggle('slider__slide-2');
    sliderSecond.classList.toggle('slide-active');

});

btnLeft.addEventListener('click', function (evt) {
    evt.preventDefault ();
    sliderPromo.classList.toggle('slider__slide-2');
    sliderSecond.classList.toggle('slide-active');
    sliderPromo.classList.toggle('slider__slide-1');
    sliderFirst.classList.toggle('slide-active');
    
});

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