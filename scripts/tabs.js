const tabsMenuListItems = document.querySelectorAll('.tabs__menu__li'),
   tabsContentItems = document.querySelectorAll('.tabs__content__item'),
   tabsMenuList = document.querySelector('.tabs__menu__ul'),
   tabsContent = document.querySelector('.tabs__content');

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
   tabsContent.scrollTop = 0;
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