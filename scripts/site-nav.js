import {selectElement} from "./selector-functions";

function siteNav() {
   const navOpenBtn = selectElement('.nav-open'),
      navCloseBtn = selectElement('.nav-close'),
      nav = selectElement('.site-nav__ul');

   navOpenBtn.addEventListener('click', () => {
      nav.classList.add('nav-show');
      document.body.style.overflow = 'hidden';
   })

   navCloseBtn.addEventListener('click', () => {
      nav.classList.remove('nav-show');
      document.body.style.overflow = '';
   })
}

export default siteNav;