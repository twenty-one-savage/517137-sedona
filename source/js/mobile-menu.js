var navMain = document.querySelector('.main-nav');
var pageHeader = document.querySelector('.page-header');
var iconClose = document.querySelector('.main-nav__close');
var iconOpen = document.querySelector('.burger__button');

pageHeader.classList.remove('page-header--nojs');

iconOpen.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    iconOpen.classList.add('burger__button--off');
  }
});

iconClose.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    iconClose.classList.add('main-nav__close--off');
    iconOpen.classList.remove('burger__button--off');
  }
});
