const elUserMenu = document.querySelector('.user__menu'),
   elModalUser = document.querySelector('.modal__user');

function clearClasses() {
   elModalUser.classList.remove('fade-out', 'show', 'fade-in');
}

elUserMenu.addEventListener('click', (evt) => {
   if (evt.target.classList.contains('modal__content')) {
      return;
   }
   if (!elModalUser.classList.contains('fade-in')) {
      document.removeEventListener('animationend', clearClasses);
      elModalUser.classList.add('fade-in', 'show');

      window.addEventListener('click', (evt) => {
         if (!evt.target.classList.contains('modal__content') && !(evt.target.classList.contains('user__menu') ||
            evt.target.classList.contains('user__menu__img') || evt.target.classList.contains('user__menu__text') ||
            evt.target.classList.contains('icon__bottom') || evt.target.classList.contains('user__img__wrapper'))) {
            elModalUser.classList.add('fade-out');
            document.addEventListener('animationend', clearClasses);
         }
      })
   } else {
      elModalUser.classList.add('fade-out');
      document.addEventListener('animationend', clearClasses);
   }
})