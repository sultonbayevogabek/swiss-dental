import {selectAllElements, selectElement} from './selector-functions'
function tabs() {
   const tabsMenuListItems = selectAllElements('.tabs__menu__li'),
      tabsContentItems = selectAllElements('.tabs__content__item'),
      tabsMenuList = selectElement('.tabs__menu__ul');

   function hideTabContent() {

      tabsContentItems.forEach(item => {
         item.classList.add('hide');
      });

      tabsMenuListItems.forEach(item => {
         item.classList.remove('tabs__menu__li--active');
      });
   }

   function showTabContent(i = 0) {
      tabsContentItems[i].classList.remove('hide');
      tabsMenuListItems[i].classList.add('tabs__menu__li--active');
   }

   hideTabContent();
   showTabContent();

   tabsMenuList.addEventListener('click', e => {
      const target = e.target;
      document.documentElement.scrollTop = 0;
      tabsMenuListItems.forEach((item, index) => {
         if (item === target) {
            hideTabContent();
            showTabContent(index);

            if (index !== 0) {
               document.querySelector('.feedback').style.display = 'none';
            } else {
               document.querySelector('.feedback').style.display = 'block';
            }
         }
      })
   })
}

export default tabs();